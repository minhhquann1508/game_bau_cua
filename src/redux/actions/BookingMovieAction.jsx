import { get_seat } from "../types/BookingMovie";

export const getSeatAction = (newSeat) => ({
    type: get_seat,
    newSeat
})
