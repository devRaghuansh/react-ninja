import { configureStore } from '@reduxjs/toolkit'
import counterReducer from '../reducers/countReducer'
export const store = configureStore({
    reducer: {
        counter: counterReducer
    }
})