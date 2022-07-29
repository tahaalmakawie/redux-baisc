import { createSlice } from "@reduxjs/toolkit";
import counterSlice from "./counterSlice"

const authSlice = createSlice({
    name: "auth",
    initialState: {isLogedIn: true},
    reducers:{
        logIn: (state) => {
            state.isLogedIn = true;
        },
        logout: (state) => {

            state.isLogedIn = false
        },
    }
});


export const {logIn, logout} = authSlice.actions
export default authSlice.reducer