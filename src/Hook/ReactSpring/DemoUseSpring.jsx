import React from 'react'
import { useSpring, animated } from 'react-spring'
export default function DemoUseSpring(props) {
    const propsAnimate = useSpring({
        from: { text_color: 'red' },
        to: { text_color: 'blue' },
        config: { duration: 5000 }
    })
    const propsNumber = useSpring({
        from: { num: 0 },
        to: { num: 2000 },
        config: { duration: 5000 }
    })
    const propsScroll = useSpring({
        from: { scroll: 0 },
        to: { scroll: 5000 },
        config: { duration: 1000 }
    })

    return (
        <div>
            <animated.h3 scrollTop={propsScroll.scroll}>
                <p>hello</p>
                <p>hello</p>
                <p>hello</p>
                <p>hello</p>
                <p>hello</p>
                <p>hello</p>
                <p>hello</p>
                <p>hello</p>
                <p>hello</p>
                <p>hello</p>
                <p>hello</p>
                <p>hello</p>
                <p>hello</p>
                <p>hello</p>
                <p>hello</p>
                <p>hello</p>
                <p>hello</p>
                <p>hello</p>
                <p>hello</p>
                <p>hello</p>
                <p>hello</p>
                <p>hello</p>
                <p>hello</p>
                <p>hello</p>
            </animated.h3>
            <h1>Change color text</h1>
            <animated.div style={{ color: propsAnimate.text_color }}>Hello World</animated.div>
            <hr />
            <h2>Change number</h2>
            <animated.h1>{propsNumber.num}</animated.h1>
        </div>
    )
}
