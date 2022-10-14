import React from 'react'
import HigherOrderComponent from './Higher-Order'

const Counthover = ({ count, increment }) => {
    return (
        <div>
            <h1>{count}</h1>
            <button onMouseOver={increment}>Increment Counter</button>
        </div>
    )
}

export default HigherOrderComponent(Counthover)