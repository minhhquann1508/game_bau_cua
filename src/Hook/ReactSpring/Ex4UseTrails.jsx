import React, { useState } from 'react';
import { useTrail, animated } from 'react-spring';
const items = [
    { title: 'Front End', content: 'CyberSoft' },
    { title: 'Back End', content: 'CyberSoft Java' },
    { title: 'BA', content: 'Python' }
]
export default function Ex4UseTrails() {
    let [status, setStatus] = useState(true);
    let [propsUseTrail, set, stop] = useTrail(items.length, () => {
        return {
            opacity: status ? 1 : 0,
            x: status ? 0 : 20,
            height: status ? 80 : 0,
            from: {
                opacity: 0,
                x: 20,
                height: 0
            }
        }
    })
    set({
        opacity: status ? 1 : 0,
        x: status ? 0 : 20,
        height: status ? 80 : 0,
        from: {
            opacity: 0,
            x: 20,
            height: 0
        }
    })
    return (
        <div>
            <button className='btn btn-success' onClick={() => {
                setStatus(!status)
            }}>check</button>
            <button onClick={() => {
                set({ color: 'pink' })
            }}>set</button>
            {propsUseTrail.map((propsUserSpring, index) => {
                return (
                    <animated.h1 key={index} style={propsUserSpring}>
                        {items[index].title}
                    </animated.h1>
                )
            })}
        </div>
    )
}
