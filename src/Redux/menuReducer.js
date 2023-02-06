import {createSlice} from "@reduxjs/toolkit";

const menuReducer = createSlice({
    name : "menureducer",
    initialState: {
        isLoading: false,
        isAuth: false,
        userData: []
    },
    reducers: {}
})

export default menuReducer.reducer
export const {} = menuReducer.actions;