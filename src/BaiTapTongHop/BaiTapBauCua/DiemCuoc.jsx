import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
export default function DiemCuoc(props) {
    let diemCuoc = useSelector(state => state.BauCuaReducer.tongDiem)
    let dispatch = useDispatch();
    return (
        <div>
            <h3 className='text-center display-4 mt-2' style={{ color: 'red' }}>Bầu cua tôm cá deeeeeee !!!!</h3>
            <div className="text-center mt-4">
                <span style={{ fontSize: '28px', borderRadius: '5px' }} className='p-2 bg-danger text-white'>
                    Tiền thưởng : <span style={{ color: 'yellow' }}>{diemCuoc.toLocaleString()}$</span>
                </span>
            </div>
            <div className="text-center mt-4">
                <button onClick={() => {
                    dispatch({
                        type: 'CHOI_LAI'
                    })
                }} className='p-2 text-white' style={{ backgroundColor: '#0f870e', border: 'none', borderRadius: '5px' }}>Chơi lại</button>
            </div>
        </div>
    )
}
