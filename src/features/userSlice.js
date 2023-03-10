import {createSlice} from "@reduxjs/toolkit";
import appApi from "../services/appApi"

const initialState = null


const userSlice = createSlice({
    name:"appApi",
    initialState,
    reducers: {
        addNotifications:(state,{payload})=> {},
        resetNotifications:(state,{payload})=> {},
        
    },
    extraReducers: (builder)=> {
        // save user after signup
        builder.addMatcher(appApi.endpoints.signupUser.matchFulfilled, (state,{payload})=>payload);
        // save user after login
        builder.addMatcher(appApi.endpoints.loginUser.matchFulfilled, (state,{payload})=> payload);
        // logout :destroy user sessions
        builder.addMatcher(appApi.endpoints.logoutUser.matchFulfilled, ()=> null)
    }

})

export const {addNotifications,resetNotifications} =userSlice.actions;
export default userSlice.reducer


