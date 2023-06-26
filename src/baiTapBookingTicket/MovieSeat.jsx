import React, { Component } from 'react'
import { connect } from 'react-redux';
import { getSeatAction } from '../redux/actions/BookingMovieAction';
class MovieSeat extends Component {
    renderSeat = () => {
        return this.props.dsGhe.map((ghe, index) => {
            let cssGheDaDat = '';
            let cssGheDangDat = '';
            let disabled = false;
            let indexGheDangDat = this.props.danhSachDaDat.findIndex((gheDaDat) => gheDaDat.soGhe === ghe.soGhe);
            if (indexGheDangDat != -1) {
                cssGheDangDat = 'gheDangChon';
            }
            if (ghe.daDat) {
                cssGheDaDat = 'gheDuocChon';
                disabled = true
            }
            return (
                <button onClick={() => this.props.getSeat(ghe)}
                    disabled={disabled} key={index} className={`ghe mt-2 mx-1 ${cssGheDaDat} ${cssGheDangDat}`}>
                    {ghe.soGhe}
                </button>
            )
        })
    }
    render() {
        return (
            <div className='text-white'>
                {this.renderSeat()}
            </div>
        )
    }
}
const mapStateToProps = (state) => {
    return {
        danhSachDaDat: state.BookingMovieReducer.danhSachDaDat
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        getSeat: (seat) => {
            dispatch(getSeatAction(seat))
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(MovieSeat)
