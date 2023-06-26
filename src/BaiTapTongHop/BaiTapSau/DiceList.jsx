import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import Dice from './Dice';
export default function DiceList() {
    let diceList = useSelector(state => state.diceReducer.diceList);
    let dispatch = useDispatch();
    return (
        <div style={{ backgroundColor: 'white', width: '300px', height: '300px', borderRadius: '50%' }}>
            <div className="row mt-5">
                <div className="col-12 mt-5 ml-5">
                    <Dice dice={diceList[0]} />
                </div>
                <div className="col-6 mt-5">
                    <Dice dice={diceList[1]} />
                </div>
                <div className="col-6 mt-5">
                    <Dice dice={diceList[2]} />
                </div>
            </div>
            <button className='mt-5' onClick={() => {
                dispatch({
                    type: 'ROLL'
                })
            }}>Xốc đĩa</button>
        </div>
    )
}
