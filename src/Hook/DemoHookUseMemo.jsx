import React, { useMemo, useState } from 'react'
import ChildUseMemo from './ChildUseMemo';

export default function DemoHookUseMemo(props) {
    let [like, setLike] = useState(1);
    let cart = [
        { id: 1, name: 'iphone', price: 1000 },
        { id: 2, name: 'samsung', price: 2000 },
        { id: 3, name: 'xiaomi', price: 1500 },
    ]
    const cartMemo = useMemo(() => cart, []);
    return (
        <div className='mt-5 container'>
            Like:{like}♥
            <br />
            <span style={{ cursor: 'pointer', color: 'red', fontSize: '35px' }}
                onClick={() => {
                    setLike(like + 1)
                }}
            >♥</span>
            <br />
            <br />
            <ChildUseMemo cart={cartMemo} />
        </div>
    )
}
