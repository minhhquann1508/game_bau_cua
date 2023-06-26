const stateDefault = {
    betList: [
        { id: 'bau', img: './img/BaiTapGameBauCua/bau.png', point: 0 },
        { id: 'cua', img: './img/BaiTapGameBauCua/cua.png', point: 0 },
        { id: 'ca', img: './img/BaiTapGameBauCua/ca.png', point: 0 },
        { id: 'ga', img: './img/BaiTapGameBauCua/ga.png', point: 0 },
        { id: 'nai', img: './img/BaiTapGameBauCua/nai.png', point: 0 },
        { id: 'tom', img: './img/BaiTapGameBauCua/tom.png', point: 0 },
    ],
    totalPoint: 1000,
    diceList: [
        { id: 'bau', img: './img/BaiTapGameBauCua/bau.png' },
        { id: 'ca', img: './img/BaiTapGameBauCua/ca.png' },
        { id: 'nai', img: './img/BaiTapGameBauCua/nai.png' },
    ]
}

export const diceReducer = (state = stateDefault, action) => {
    switch (action.type) {
        case 'CHANGE_BET_QUANTITY': {
            let newBetList = [...state.betList];
            let index = newBetList.findIndex((betItem) => betItem.id === action.item.id);
            if (index !== -1) {
                if (action.upDown) {
                    if (state.totalPoint > 0) {
                        newBetList[index].point += 100;
                        state.totalPoint -= 100;
                    }
                }
                else {
                    if (newBetList[index].point > 0) {
                        newBetList[index].point -= 100;
                        state.totalPoint += 100;
                    }
                }
            }
            state.betList = newBetList;
            return { ...state };
        }
        case 'ROLL': {
            let newDiceList = [];
            for (let i = 0; i < 3; i++) {
                let random = Math.floor(Math.random() * 6);
                newDiceList.push(state.betList[random])
            }
            state.diceList = newDiceList;
            newDiceList.forEach((dice) => {
                let index = state.betList.findIndex((betItem) => betItem.id === dice.id);
                if (index !== -1) {
                    state.totalPoint += state.betList[index].point;
                }
            })
            state.betList.forEach((bet) => {
                let index = state.diceList.findIndex((dice) => dice.id === bet.id);
                if (index !== -1) {
                    state.totalPoint += bet.point;
                    bet.point = 0;
                }
            })
            state.betList.map((bet) => {
                return { ...bet, point: 0 }
            })
            return { ...state };
        }
        default: {
            return state;
        }
    }
}
