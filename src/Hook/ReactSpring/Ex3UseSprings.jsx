import React from 'react'
import { animated, useSprings } from 'react-spring';

export default function Ex3UseSprings() {
    let arrOpacity = [{ opacity: 0.1, color: 'red' }, { opacity: 0.3, color: 'blue' }, { opacity: 0.5, color: 'white' }, { opacity: 0.7, color: 'pink' }, { opacity: 1, color: 'black' }];
    let propsAnimationUseSprings = useSprings(arrOpacity.length, arrOpacity.map(item => {
        return {
            opacity: item.opacity,
            color: item.color,
            from: {
                color: 'purple',
                opacity: 0
            },
            config: { duration: 3000 }
        }
    }))
    return (
        <div>
            {propsAnimationUseSprings.map((propsAni, index) => {
                console.log(propsAni);
                return <animated.div key={index} style={propsAni}>
                    23355
                </animated.div>
            })}
        </div>
    )
}
