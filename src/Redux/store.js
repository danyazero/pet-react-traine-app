import {combineReducers} from "redux";
import {configureStore} from "@reduxjs/toolkit";


let reducers = combineReducers({

    }
)

let store = configureStore({
    reducer: reducers
})

export default store;