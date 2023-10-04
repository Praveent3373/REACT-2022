import React, { useContext } from 'react'
import { UserContext } from './UseContext'


// useContext with future value

const User = () => {
    const userContext = useContext(UserContext)
    const handleLogin = () => {
        userContext.setUser({
            name: 'Naveen KUmar',
            email: 'navn@gmail.com'
        })
    }
    const handleLogout = () => {
        userContext.setUser(null);
    }
    return (
        <>
            <button onClick={handleLogin}>Login</button>
            <button onClick={handleLogout}>Logout</button>
            <div>User Name is {userContext.user?.name} </div>
            <div>User Name is {userContext.user?.email} </div>
        </>
    )
}

export default User