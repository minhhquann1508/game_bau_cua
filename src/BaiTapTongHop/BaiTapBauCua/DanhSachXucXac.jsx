import React from 'react'
import XucXac from './XucXac'
import { useSelector, useDispatch } from 'react-redux'

export default function DanhSachXucXac() {
    let mangXucXac = useSelector(state => state.BauCuaReducer.mangXucXac);
    let dispatch = useDispatch()
    return (
        <div className='mt-5 ml-5'>
            <div className='bg-light' style={{ width: '300px', height: '300px', borderRadius: '50%', border: '5px solid red' }}>
                <div className="row ml-4">
                    <div className="col-12 text-center ml-5" style={{ marginTop: '50px' }}>
                        <XucXac dice={mangXucXac[0]} />
                    </div>
                    <div className="col-6 text-center" style={{ marginTop: '50px' }}>
                        <XucXac dice={mangXucXac[1]} />
                    </div>
                    <div className="col-6 text-center" style={{ marginTop: '50px' }}>
                        <XucXac dice={mangXucXac[2]} />
                    </div>
                </div>
            </div>
            <div className='text-center mt-4'>
                <button onClick={() => {
                    dispatch({
                        type: 'ROLL'
                    })
                }} className='px-4 py-1' style={{ borderRadius: '5px', backgroundColor: 'red', color: 'white' }}>Lắc</button>
            </div>
        </div>
    )
}
