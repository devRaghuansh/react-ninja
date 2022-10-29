import React from 'react'
import AccessContext from './AccessContext'
import UserState from './context/UserState'

const CreateContext = () => {
    return (
        <UserState>
            <h2>Create Context</h2>
            <AccessContext />
        </UserState>
    )
}
export default CreateContext