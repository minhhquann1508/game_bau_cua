import React, { Fragment } from 'react'
import { useSpring } from 'react-spring'
export default function XucXac(props) {
    const [propsDice] = useSpring(() => {
        return {
            to: {
                xyz: [360, 360, 360]
            },
            from: {
                xyz: [0, 0, 0]
            }
        }
    })
    return (
        <Fragment>
            <div className="view">
                <div className="cube">
                    <img className='cube_face front' src={props.dice.hinhAnh} width={50} alt="" />
                    <img className='cube_face back' src={props.dice.hinhAnh} width={50} alt="" />
                    <img className='cube_face left' src={props.dice.hinhAnh} width={50} alt="" />
                    <img className='cube_face right' src={props.dice.hinhAnh} width={50} alt="" />
                    <img className='cube_face top' src={props.dice.hinhAnh} width={50} alt="" />
                    <img className='cube_face bottom' src={props.dice.hinhAnh} width={50} alt="" />
                </div>
            </div>
        </Fragment >
    )
}
