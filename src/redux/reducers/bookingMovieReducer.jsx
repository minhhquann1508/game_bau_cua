import { get_seat } from "../types/BookingMovie";
const stateDefault = {
    danhSachDaDat: []
}

export const BookingMovieReducer = (state = stateDefault, action) => {
    switch (action.type) {
        case get_seat: {
            let danhSachDaDatUpdate = [...state.danhSachDaDat];
            let index = danhSachDaDatUpdate.findIndex((gheDaDat) => gheDaDat.soGhe === action.newSeat.soGhe)
            if (index != -1) {
                danhSachDaDatUpdate.splice(index, 1);
            }
            else {
                danhSachDaDatUpdate.push(action.newSeat)
            }
            console.log(danhSachDaDatUpdate);
            state.danhSachDaDat = danhSachDaDatUpdate;
            return { ...state };
        }
        default: {
            return { ...state };
        }
    }
}
