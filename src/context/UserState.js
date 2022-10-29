import React from 'react'
import userContext from './UserContext'

const UserState = (props) => {
    return (
        <userContext.Provider value={{name: 'name'}}>
            {props.children}
        </userContext.Provider>
    )
}

export default UserState