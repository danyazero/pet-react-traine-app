import {combineReducers} from "redux";
import {configureStore} from "@reduxjs/toolkit";
import mainPageReducer from "./mainPageReducer";
import menuReducer from "./menuReducer";
import {reducer as reduxForm} from "redux-form";
import authReducer from "./authReducer";
import workoutsPageReducer from "./workoutsPageReducer";


let reducers = combineReducers({
        mainReducer: mainPageReducer,
        menuReducers: menuReducer,
        workoutsReducers: workoutsPageReducer,
        auth: authReducer,
        form: reduxForm,
    }
)

let store = configureStore({
    reducer: reducers
})

export default store;