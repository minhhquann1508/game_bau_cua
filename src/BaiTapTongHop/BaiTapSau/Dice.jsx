import React from 'react'
import { useSpring, animated } from 'react-spring'

export default function Dice(props) {
    const [propsDice, set] = useSpring(() => {
        return {
            from: {
                xyz: [0, 0, 0]
            },
            to: {
                xyz: [360, 360, 360]
            },
            config: { duration: 1000 },
            reset: true
        }
    })
    set.start({
        from: { xyz: [0, 0, 0] },
        to: { xyz: [360, 360, 360] }
    })
    return (
        <animated.div className="cube ml-5" style={{ transform: propsDice.xyz.to((x, y, z) => `rotateX(${x}deg) rotateY(${y}deg) rotateZ(${z}deg)`) }}>
            <div className="cube-face front">
                <img src={props.dice.img} alt="Front Face" />
            </div>
            <div className="cube-face back">
                <img src="./img/BaiTapGameBauCua/ca.png" alt="Back Face" />
            </div>
            <div className="cube-face top">
                <img src="./img/BaiTapGameBauCua/ga.png" alt="Top Face" />
            </div>
            <div className="cube-face bottom">
                <img src="./img/BaiTapGameBauCua/cua.png" alt="Bottom Face" />
            </div>
            <div className="cube-face left">
                <img src="./img/BaiTapGameBauCua/bau.png" alt="Left Face" />
            </div>
            <div className="cube-face right">
                <img src="./img/BaiTapGameBauCua/nai.png" alt="Right Face" />
            </div>
        </animated.div>
    )
}
