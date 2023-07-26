import { createSlice } from "@reduxjs/toolkit";
import { logIn, logOut, refreshUser, register } from "./operations";

const initialStateAuth = {
    user: { name: null, email: null },
    token: null,
    isLoggedIn: false,
    isRefreshing: false
};

const authSlice = createSlice({
    name: "auth",
    initialState: initialStateAuth,
    extraReducers: builder =>
        builder
            .addCase(register.fulfilled, (state, { payload }) => {
                state.user = payload.user;
                state.token = payload.token;
                state.isLoggedIn = true;                
            })
            .addCase(logIn.fulfilled, (state, { payload }) => {
                state.user = payload.user;
                state.token = payload.token;               
                state.isLoggedIn = true;
            })
            .addCase(logOut.fulfilled, (state) => {
                state.user = { name: null, email: null };
                state.token = null;                  
                state.isLoggedIn = false;
            })   
            .addCase(refreshUser.pending, (state) => {
                state.isRefreshing = true;
            })               
            .addCase(refreshUser.fulfilled, (state, {payload}) => {
                state.user = payload;
                state.isLoggedIn = true;
                state.isRefreshing = false;
            })    
            .addCase(refreshUser.rejected, (state) => {
                state.isRefreshing = false;
            })       
})

export const authReducer = authSlice.reducer;