import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    count: 0
}
//create slice expects a name and reducer
export const countSlice = createSlice({
    name: 'count',
    initialState,
    reducers: {
        setIncrement: (state) => {
            state.count = state.count -1
        }, 
        setDecrement: (state) => {
            state.count = state.count -1
        }
    }
})

export const {setIncrement, setDecrement} = countSlice.actions
export default countSlice.reducer