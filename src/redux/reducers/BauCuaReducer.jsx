const stateDefault = {
    danhSachCuoc: [
        { ma: 'bau', hinhAnh: './img/BaiTapGameBauCua/bau.png', diemCuoc: 0 },
        { ma: 'ca', hinhAnh: './img/BaiTapGameBauCua/ca.png', diemCuoc: 0 },
        { ma: 'tom', hinhAnh: './img/BaiTapGameBauCua/tom.png', diemCuoc: 0 },
        { ma: 'cua', hinhAnh: './img/BaiTapGameBauCua/cua.png', diemCuoc: 0 },
        { ma: 'nai', hinhAnh: './img/BaiTapGameBauCua/nai.png', diemCuoc: 0 },
        { ma: 'ga', hinhAnh: './img/BaiTapGameBauCua/ga.png', diemCuoc: 0 },
    ],
    tongDiem: 1000,
    mangXucXac: [
        { ma: 'bau', hinhAnh: './img/BaiTapGameBauCua/bau.png' },
        { ma: 'ca', hinhAnh: './img/BaiTapGameBauCua/ca.png' },
        { ma: 'ga', hinhAnh: './img/BaiTapGameBauCua/ga.png' },
    ]
}

export const BauCuaReducer = (state = stateDefault, action) => {
    switch (action.type) {
        case 'DAT_CUOC': {
            let danhSachDatCuoc = [...state.danhSachCuoc];
            let index = danhSachDatCuoc.findIndex((item) => item.ma === action.item.ma);
            if (index != -1) {
                if (action.tangGiam) {
                    if (state.tongDiem > 0) {
                        danhSachDatCuoc[index].diemCuoc += 100;
                        state.tongDiem -= 100;
                    }
                }
                else {
                    if (danhSachDatCuoc[index].diemCuoc > 0) {
                        danhSachDatCuoc[index].diemCuoc -= 100;
                        state.tongDiem += 100;
                    }
                }
            }
            state.danhSachCuoc = danhSachDatCuoc;
            return { ...state }
        }
        case 'ROLL': {
            let mangXucXacMoi = [];
            for (let i = 0; i < 3; i++) {
                let random = Math.floor(Math.random() * 6);
                mangXucXacMoi.push(state.danhSachCuoc[random])
            }
            state.mangXucXac = mangXucXacMoi;
            //Xử lí tăng điểm thưởng
            mangXucXacMoi.forEach((xucXac) => {
                let index = state.danhSachCuoc.findIndex((item) => item.ma === xucXac.ma);
                if (index !== -1) {
                    state.tongDiem += state.danhSachCuoc[index].diemCuoc
                }
            })
            //Xử lí hoàn tiền về tổng tiền
            state.danhSachCuoc.forEach((quanCuoc) => {
                let index = mangXucXacMoi.findIndex((xucXac) => xucXac.ma === quanCuoc.ma);
                if (index !== -1) {
                    state.tongDiem += quanCuoc.diemCuoc;
                    quanCuoc.diemCuoc = 0;
                }
            })
            //Xử lý reset tiền đặt cược
            state.danhSachCuoc.map((quanCuoc) => {
                return { ...quanCuoc, diemCuoc: 0 }
            })
            return { ...state };
        }
        case 'CHOI_LAI': {
            state.tongDiem = 1000;
            state.danhSachCuoc.map((quanCuoc) => {
                return { ...quanCuoc, diemCuoc: 0 }
            })
            return { ...state };
        }
        default: {
            return { ...state };
        }
    }
}
