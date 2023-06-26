import React, { useReducer } from 'react'


export const context = React.createContext();
const initialCart = [
    { id: 1, name: 'iphone', price: 1000, quantity: 1 },
    { id: 2, name: 'samsung', price: 2000, quantity: 1 },
    { id: 3, name: 'xiaomi', price: 1500, quantity: 1 },
]
const cartReducer = (state, action) => {
    switch (action.type) {
        case 'ADD_TO_CART': {
            let cartUpdate = [...state];
            let index = cartUpdate.findIndex((product) => product.id === action.item.id);
            if (index !== -1) {
                cartUpdate[index].quantity += 1;
            }
            else {
                cartUpdate.push(action.item)
            }
            return cartUpdate;
        }
    }
    return { ...state }
}

export default function ContextProvider(props) {

    let [cart, dispatch] = useReducer(cartReducer, initialCart);



    //Dùng context bao tất cả component bên trong cụ thể là app


    //Store giống rootReducer
    const store = {
        cartReducer: [cart, dispatch]
    }
    return (
        <context.Provider value={store}>
            {props.children}
        </context.Provider>
    )
}
