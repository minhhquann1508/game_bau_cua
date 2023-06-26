import React, { useState, useEffect } from 'react'

export default function DemoUseEffect(props) {
    let [number, setNumber] = useState(1);
    useEffect(() => {

    }, [])
    const handleIncrease = () => {
        setNumber(number + 1)
    }
    return (
        <div className='container'>
            <div className="card">
                <div className="card-body">
                    <h4 className="card-title">Hình ảnh</h4>
                    <p className="card-text">{number}<i className='fa fa-heart'></i></p>
                    <button className='btn btn-danger' onClick={() => handleIncrease()}>+</button>
                </div>
            </div>
        </div>
    )
}
