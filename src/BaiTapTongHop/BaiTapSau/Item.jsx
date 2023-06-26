import React from 'react'
import { useDispatch } from 'react-redux';
import { useSpring, animated } from 'react-spring';
export default function Item(props) {
    let dispatch = useDispatch();
    let { item, index } = props;
    const [decreaseUseSpring, decrease] = useSpring(() => {
        return {
            from: {
                scale: 1.25
            },
            to: {
                scale: 1
            }
        }
    })
    const [increaseUseSpring, increase] = useSpring(() => {
        return {
            from: {
                scale: 1.25
            },
            to: {
                scale: 1
            }
        }
    })
    return (
        <div className="col-4 mt-3 text-center" key={index}>
            <img src={item.img} alt="bau" style={{ width: '200px' }} />
            <div className=' text-center mt-1 py-3' style={{ backgroundColor: 'pink', marginLeft: '55px', width: '200px' }}>
                <animated.button style={{ transform: decreaseUseSpring.scale.to(scale => `scale(${scale})`) }} onClick={() => {
                    decrease.start({
                        to: { scale: 1 },
                        from: { scale: 1.25 },
                        reset: true,
                    })
                    dispatch({
                        type: 'CHANGE_BET_QUANTITY',
                        item,
                        upDown: false
                    })
                }}>-</animated.button>
                <span className='mx-2'><span>{item.point}</span> Điểm</span>
                <animated.button style={{ transform: increaseUseSpring.scale.to(scale => `scale(${scale})`) }} onClick={() => {
                    increase.start({
                        to: { scale: 1 },
                        from: { scale: 1.25 },
                        reset: true,
                    })
                    dispatch({
                        type: 'CHANGE_BET_QUANTITY',
                        item,
                        upDown: true
                    })
                }}>+</animated.button>
            </div>
        </div>
    )
}
