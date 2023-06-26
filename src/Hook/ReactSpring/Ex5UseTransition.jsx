import React, { useState } from 'react';
import { useTransition, animated } from 'react-spring';

export default function Ex5UseTransition() {
    let [arrItem, setArrItems] = useState([
        { id: 1, title: 'Front End', content: 'CyberSoft' },
        { id: 2, title: 'Back End', content: 'CyberSoft Java' },
        { id: 3, title: 'BA', content: 'Python' }
    ])
    const propsUseTransition = useTransition(arrItem, item => item.id, {
        from: { transform: 'translate3d(0,-40px,0)' },
        enter: { transform: 'translate3d(0,0px,0)' },
        leave: { transform: 'translate3d(0,-40px,0)' },
    })
    let renderItem = () => {
        return propsUseTransition.map((propsAnim, index) => {
            console.log(propsAnim);
            return <animated.div style={propsAnim.item} className='bg-dark text-white p-3 m-2' key={index}>
                <h3>{propsAnim.item.title}</h3>
                <p>{propsAnim.item.content}</p>
            </animated.div>
        })
    }
    return (
        <div>
            {renderItem()}
        </div>
    )
}
