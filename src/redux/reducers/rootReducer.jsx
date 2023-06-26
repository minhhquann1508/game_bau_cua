import { combineReducers } from "redux";
import ToDoListReducer from './ToDoListReducer';
import UserReducer from "./UserReducer";
import { FakebookReducer } from './fakeBookReducer';
import { BookingMovieReducer } from './bookingMovieReducer'
import { BauCuaReducer } from "./BauCuaReducer";
import { diceReducer } from "./diceReducer";
export const rootReducer = combineReducers({
    ToDoListReducer,
    UserReducer,
    FakebookReducer,
    BookingMovieReducer,
    BauCuaReducer,
    diceReducer,
})