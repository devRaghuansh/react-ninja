import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { decrementCount, incrementCount } from './action/counter'
const Counter = () => {
    const dispatch = useDispatch()
    const {count} = useSelector(state => state.counter)
    return (
        <div>
            {count}
            <button onClick={() => {dispatch(decrementCount())}}>Decrement</button>
            <button onClick={() =>dispatch(incrementCount())}>Increment</button>
        </div>
    )
}

export default Counter