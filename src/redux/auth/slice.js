import { createSlice } from "@reduxjs/toolkit";
import { userState } from "./state";

export const userSlice = createSlice({
    name: "userState",
    initialState: userState,
    reducers: {
        setLoginStatus: (state, action) => ({
            ...state,
            isLoggedIn: action.payload
        }),
        setUser: (state, action) => ({
            ...state,
            isLoggedIn: true,
            user: action.payload
        })
    }
})

export const { setLoginStatus, setUser } = userSlice.actions
export default userSlice.reducer