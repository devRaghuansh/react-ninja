import { setDecrement, setIncrement } from '../reducers/countReducer'

export const incrementCount = () =>(dispatch) => {
    dispatch(setIncrement())
}

export const decrementCount = () =>(dispatch) => {
    dispatch(setDecrement())
}