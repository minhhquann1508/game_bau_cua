import React from 'react'
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useSpring, animated } from 'react-spring';
export default function QuanCuoc(props) {
    let { item } = props
    const dispatch = useDispatch();
    const [isReset, setIsReset] = useState(true);
    const [propsUseSpring, api] = useSpring(() => {
        return {
            to: {
                scale: 1.25
            },
            from: {
                scale: 1
            },
        }
    })
    return (
        <div className='mt-1'>
            <img src={item.hinhAnh} alt={item.hinhAnh} style={{ width: '200px' }} />
            <div className='bg-success mt-1 text-center px-2 py-3' style={{ width: '200px' }}>
                <animated.button onClick={() => {
                    api.start({
                        to: { scale: 1 },
                        from: { scale: 1.25 },
                        reset: true,
                    })
                    dispatch({
                        type: 'DAT_CUOC',
                        item,
                        tangGiam: false
                    })
                }} style={{ width: '30px', backgroundColor: '#d10427', border: 'none', color: 'white', borderRadius: '5px', transform: propsUseSpring.scale.to(scale => `scale(${scale})`) }}>-</animated.button>
                <span className='mx-2' style={{ color: 'yellow', fontSize: '20px' }}>{item.diemCuoc} điểm</span>
                <animated.button onClick={() => {
                    api.start({
                        to: { scale: 1 },
                        from: { scale: 1.25 },
                        reset: true,
                    })
                    dispatch({
                        type: 'DAT_CUOC',
                        item,
                        tangGiam: true
                    })
                }} style={{ width: '30px', backgroundColor: '#d10427', border: 'none', color: 'white', borderRadius: '5px', transform: propsUseSpring.scale.to(scale => `scale(${scale})`) }}>+</animated.button>
            </div>
        </div>
    )
}
