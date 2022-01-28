import { createSlice } from "@reduxjs/toolkit";
import { cvInfoReducer } from "./reducers";
import { cvInfo } from "./state";

export const cvInfoSlice = createSlice({
    name: "cvInfo",
    initialState: cvInfo,
    reducers: cvInfoReducer
})

export const { setSingleInfo, setGroupInfo, setAvatar } = cvInfoSlice.actions
export default cvInfoSlice.reducer