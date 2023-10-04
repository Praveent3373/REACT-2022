import React, { useState } from 'react'

const UseState = () => {
    return (
        <>
            <h3>use State</h3>
            <LoggedIn/>
            <FuturValue/>
            <TypeAssertion/>
        </>
    )
}

// #1. No type
const LoggedIn = () => {
    const [isLoggedIn, setLoggedIn] = useState(false);
    const handleLoggin = () => setLoggedIn(true);
    const handleLogout = () => setLoggedIn(false);
    return <>
        <button onClick={handleLoggin}>Login</button>
        <button onClick={handleLogout}>Logout</button>
        <h6>User is {isLoggedIn ? 'Logged in' : 'logged out'}</h6>
    </>
}


// #2. Type in case of future changes
type AuthUser = {
    name: string,
    email: string
}
const FuturValue = () => {
    const [user, setUser] = useState<null | AuthUser>(null);
    const handleLoggin = () => setUser({
        name: 'Naveen', email: 'navn@gmail.com'
    });
    const handleLogout = () => setUser(null);
    return <>
        <button onClick={handleLoggin}>Login</button>
        <button onClick={handleLogout}>Logout</button>
        <h6>User name is {user?.name} </h6>
        <h6>Email is  is {user?.email}</h6>
    </>
}

// #3. Type Assertion in case we always have value, if you confidant user will be initialized after setup.
const TypeAssertion = () => {
    const [user, setUser] = useState<AuthUser>({} as AuthUser);
    // empty{} object as initial value with type AuthUser
    const handleLoggin = () => setUser({
        name: 'Naveen', email: 'navn@gmail.com'
    });
    return <>
        <button onClick={handleLoggin}>Login</button>
        <h6>User name is {user.name} </h6>
        <h6>Email is  is {user.email}</h6>
    </>
}


export default UseState

// Notes:

// you dont really have to explicitly type the useState hook
// type inference will take care of everything for simple values

// In case if the value changes in future, we need to declare type
// In this case it will consider either null or AuthUser
