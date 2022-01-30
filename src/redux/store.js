import { configureStore } from '@reduxjs/toolkit'
import cvInfoReducers from './cvInfo.js/slice'
import userStateReducers from './auth/slice'

export default configureStore({
    reducer: {
        cvInfo: cvInfoReducers,
        userState: userStateReducers
    }
})