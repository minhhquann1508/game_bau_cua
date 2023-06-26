import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
export default function Point() {
    let useSelectorProps = useSelector(state => state.diceReducer)
    let dispatch = useDispatch()
    return (
        <div className='text-center mt-4'>
            <h2>BẦU CUA ĐEEEEEEE</h2>
            <div className='mt-3'>
                <button>Tiền thưởng : {useSelectorProps.totalPoint}$</button>
                <button className='ml-2' onClick={() => {
                    dispatch({
                        type: 'PLAY_AGAIN'
                    })
                }}>Chơi lại</button>
            </div>
        </div>
    )
}
