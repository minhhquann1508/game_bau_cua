import React, { Component } from 'react'
import '../baiTapBookingTicket/BaiTapBookingTicket.css';
import TableMovieBooking from './TableMovieBooking';
import data from '../data/danhSachGhe.json'
import MovieSeat from './MovieSeat';
export default class BookingMovie extends Component {
    renderHang = () => {
        return data.map((ghe, index) => {
            return (
                <div className='text-white' style={{ margin: '10px' }} key={index}>
                    {ghe.hang}
                </div>
            )
        })
    }
    renderSeatPlace = () => {
        return data.map((ghe, index) => {
            return (
                <MovieSeat key={index} dsGhe={ghe.danhSachGhe} index={index} />
            )
        })
    }
    render() {
        return (
            <div style={{ position: 'fixed', width: '100%', height: '100%', backgroundImage: 'url(./img/bookingTicket/bgmovie.jpg)', backgroundSize: '100%' }}>
                <div className='container-fluid' style={{ position: 'fixed', width: '100%', height: '100%', backgroundColor: 'rgba(0,0,0,0.7)' }}>
                    <div className="row mt-5">
                        <div className="col-7">
                            <h3 className='text-center' style={{ color: '#E50237' }}>Booking movie ticket</h3>
                            <h4 className='text-center text-white'>Màn hình</h4>
                            <div style={{ display: 'flex', justifyContent: 'center', flexDirection: 'column' }}>
                                <div style={{ display: 'flex', justifyContent: 'center' }}>
                                    <div className="screen"></div>
                                </div>
                                <div className='ml-5' style={{ display: 'flex', justifyContent: 'flex-start' }}>
                                    <div style={{ display: 'flex', flexDirection: 'column' }} className='mt-4'>
                                        {this.renderHang()}
                                    </div>
                                    <div className='ml-4' style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                                        {this.renderSeatPlace()}
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-5 mt-3">
                            <h4 className='text-center' style={{ color: '#E50237' }}>Số vé đã đặt</h4>
                            <TableMovieBooking />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
