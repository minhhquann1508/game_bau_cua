import React, { Component } from 'react'
import { connect } from 'react-redux'
class TableMovieBooking extends Component {
    renderTable = () => {
        return this.props.danhSachDaDat.map((seat, index) => {
            return (
                <tr className='text-white' key={index}>
                    <th>{seat.soGhe}</th>
                    <th>{seat.gia}</th>
                    <th className='text-center'>
                        <button className='btn btn-danger'>Xóa</button>
                    </th>
                </tr>
            )
        })
    }
    render() {
        return (
            <div className="container">
                <div>
                    <button className='gheDuocChon'></button> <span className='text-white ml-2' style={{ fontSize: '20px' }}>Ghế đã đặt</span>
                    <br />
                    <button className='gheDangChon'></button><span className='text-white ml-2' style={{ fontSize: '20px' }}>Ghế đang chọn</span>
                    <br />
                    <button className='ghe'></button><span className='text-white ml-2' style={{ fontSize: '20px' }}>Ghế còn trống</span>
                </div>
                <table className="table mt-5" border={3}>
                    <thead>
                        <tr className='text-white'>
                            <th>Hàng ghế</th>
                            <th>Giá</th>
                            <th className='text-center'><i className='fa fa-gear'></i></th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.renderTable()}
                    </tbody>
                </table>
            </div>
        )
    }
}
const mapStateToProps = (state) => {
    return {
        danhSachDaDat: state.BookingMovieReducer.danhSachDaDat
    }
}
export default connect(mapStateToProps, null)(TableMovieBooking)
