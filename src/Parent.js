import React,{useRef} from 'react'
import Child from './Child'

const Parent = () => {
    const myRef = useRef(null)
    const handleChildRef = () => {
        console.log('ref', myRef)
    }
    return (
        <>
        <h1 onClick={handleChildRef}>This is a parent component</h1>
        <Child ref={myRef}/>
        </>
    )
}

export default Parent