import { createSlice } from "@reduxjs/toolkit";
import { userState } from "./state";

export const userSlice = createSlice({
    name: "userState",
    initialState: userState,
    reducers: {
        setIsLoggedIn: (state, action) => ({
            ...state,
            isLoggedIn: action.payload
        }),
        setUser: (state, action) => ({
            ...state,
            isLoggedIn: action.payload.isLoggedIn,
            loginStatus: action.payload.loginStatus,
            user: action.payload.user
        }),
        setLoginStatus: (state, action) => ({
            ...state,
            loginStatus: action.payload
        })
    }
})

export const { setIsLoggedIn, setUser, setLoginStatus } = userSlice.actions
export default userSlice.reducer