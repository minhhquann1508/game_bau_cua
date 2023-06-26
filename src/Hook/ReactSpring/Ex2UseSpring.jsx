import React from 'react'
import { useSpring, animated } from 'react-spring'

export default function Ex2UseSpring() {
    let propsUseSpring = useSpring({
        from: { color: [0, 0, 0] },
        to: { color: [133, 111, 255] },
        config: { delay: 2000, duration: 2000 }
    })
    //Tang font chu chieu dai
    let propsAnimation = useSpring({
        from: {
            width: '0%',
            height: '0%',
            fontSize: '10px'
        },
        to: async (next, cancel) => {
            await next({ width: '100%', height: '100%', fontSize: '50px' })
            await next({ width: '50%', height: '50%', fontSize: '10px' })
            await next({ width: '100%', height: '100%', fontSize: '50px' })
        },
        config: { duration: 5000 }
    })

    return (
        <div>
            <animated.h2 style={{ color: propsUseSpring.color.interpolate((r, g, b) => `rgb(${r},${g},${b})`) }}>Hello</animated.h2>
            <animated.div style={propsAnimation} className='bg-dark text-white'>
                <span>
                    hello cyberlearn
                </span>
                <p>
                    khoa hoc cua cyber learn
                </p>
            </animated.div>
        </div>
    )
}
