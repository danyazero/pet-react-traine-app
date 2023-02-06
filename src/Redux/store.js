import {combineReducers} from "redux";
import {configureStore} from "@reduxjs/toolkit";
import mainPageReducer from "./mainPageReducer";
import menuReducer from "./menuReducer";
import {reduxForm} from "redux-form";
import authReducer from "./authReducer";


let reducers = combineReducers({
        mainReducer: mainPageReducer,
        menuReducers: menuReducer,
        auth: authReducer,
        form: reduxForm,
    }
)

let store = configureStore({
    reducer: reducers
})

export default store;