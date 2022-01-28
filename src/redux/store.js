import { configureStore } from '@reduxjs/toolkit'
import cvInfoReducers from './cvInfo.js/slice'

export default configureStore({
    reducer: {
        cvInfo: cvInfoReducers
    }
})