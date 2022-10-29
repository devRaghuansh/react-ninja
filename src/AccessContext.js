import React,{useContext} from 'react'
import userContext from './context/UserContext'

const AccessContext = () => {
    const user = useContext(userContext)
    return(
        <h2>Access Context {user.name}</h2>
    )
}

export default AccessContext