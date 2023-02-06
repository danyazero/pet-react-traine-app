import {createSlice} from "@reduxjs/toolkit";

const authReducer = createSlice({
    name : "authReducer",
    initialState: {
        name: "Danya",
        surname: "Mozzhukhin",
        isAuth: false
    },
    reducers: {}
})

export default authReducer.reducer;
export const {} = authReducer.actions