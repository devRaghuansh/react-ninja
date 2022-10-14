import React from 'react'
import HigherOrderComponent from './Higher-Order'

const CountClick = ({count,increment}) => {
    return (
        <div>
            <h1>{count}</h1>
            <button onClick={increment}>Increment Counter</button>
        </div>
    )
}

export default HigherOrderComponent(CountClick) 