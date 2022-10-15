import React from 'react'
import { useState } from 'react'

const Counter = () => {
    const [count, setCount] = useState(0)
    const handleIncrement = () => {
        setCount(count + 1)
    }
    const handleDecrement = () => {
        setCount(count - 1)
    }
    return (
        <div>
            {count}
            <button onClick={handleDecrement}>Decrement</button>
            <button onClick={handleIncrement}>Increment</button>
        </div>
    )
}

export default Counter