import { combineReducers } from "redux";
import flashcardReducers from "./flashcardReducers";


const rootReducer = combineReducers({
    flashcardReducers:flashcardReducers,
})

export default rootReducer;