import React from 'react'
const Child = React.forwardRef((props, ref) => {
    return <h4 ref={ref}>This is child component</h4>
})

export default Child