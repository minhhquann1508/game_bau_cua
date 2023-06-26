import React from 'react'
import DiemCuoc from './DiemCuoc'
import DanhSachCuoc from './DanhSachCuoc';
import DanhSachXucXac from './DanhSachXucXac';
import './dice.css'
export default function BaiTapGameBauCua(props) {
    return (
        <div className='container' id='game'>
            <DiemCuoc />
            <div className="row">
                <div className="col-8">
                    <DanhSachCuoc />
                </div>
                <div className="col-4">
                    <DanhSachXucXac />
                </div>
            </div>
        </div>
    )
}
