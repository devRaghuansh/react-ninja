//This is a higher order component which add button.
//Main purpose of higher order compnent is to reuse component logic
//takes component and reture new component 
//Component transform props into UI. Higher order component transform a component into another component 
//A HOC is a pure function with no side effect. 
//https://flexiple.com/react/introduction-to-higher-order-components-in-react-by-example/#section2

import { useState } from "react"

const HigherOrderComponent = (ChildComponent) => {
    const HigherOrder = (props) => {
        const [count, setCount] = useState(0)
        const increment = () => {
            setCount(count + 1)
        }
        return <ChildComponent count={count} increment={increment} {...props}/>
    }
    return HigherOrder
}

export default HigherOrderComponent