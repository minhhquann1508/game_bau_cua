import React, { useContext } from 'react';
import { context } from '../Context/ContextProvider';
let arrProduct = [
    { id: 1, name: 'iphone', price: '1000' },
    { id: 2, name: 'samsung', price: 2000 },
    { id: 3, name: 'xiaomi', price: 1500 },
]
export default function DemoUseContext(props) {
    let { cartReducer } = useContext(context);
    let [cart, dispatch] = cartReducer;
    const addToCart = (item) => {
        const action = {
            type: 'ADD_TO_CART',
            item
        }
        dispatch(action);
    }
    return (
        <div className='container'>
            <h3>Giỏ hàng</h3>
            <div className="row">
                {arrProduct.map((product, index) => {
                    return (
                        <div className="col-4" key={index}>
                            <div className="card">
                                <img className="card-img-top" src="https://picsum.photo/200/200" alt={index} />
                                <div className="card-body">
                                    <h4 className="card-title">{product.name}</h4>
                                    <p className="card-text">{product.price}</p>
                                    <button onClick={() => addToCart(product)}>Add</button>
                                </div>
                            </div>

                        </div>
                    )
                })}
            </div>
            <table className="table">
                <thead>
                    <tr>
                        <th>id</th>
                        <th>name</th>
                        <th>price</th>
                        <th>quantity</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {cart.map((product, index) => {
                        return (
                            <tr key={index}>
                                <td>{product.id}</td>
                                <td>{product.name}</td>
                                <td>{product.price}</td>
                                <td>{product.quantity}</td>
                                <td>
                                    <button>Xóa</button>
                                </td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </div>
    )
}
