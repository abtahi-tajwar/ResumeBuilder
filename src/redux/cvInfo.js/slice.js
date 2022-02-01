import { createSlice } from "@reduxjs/toolkit";
import { cvInfoReducer } from "./reducers";
import { cvInfo } from "./state";

export const cvInfoSlice = createSlice({
    name: "cvInfo",
    initialState: cvInfo,
    reducers: cvInfoReducer
})

export const { setSingleInfo, setGroupInfo, setAvatar, setCVInfo } = cvInfoSlice.actions
export default cvInfoSlice.reducer