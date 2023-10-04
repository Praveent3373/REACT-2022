
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { logIn, logOut } from './actions'
export const Authentication = () => {
    const auth = useSelector((state) => state.authReducer)
    console.log(auth);
    const dispatch = useDispatch();
    return (
        <>
        <h2>For Logged in users only</h2>
        <p>Log in to see a secret about me</p>
        <button onClick={() => dispatch(logIn())}>Login</button>
        <button onClick={() => dispatch(logOut())}>Logout</button>
        {auth ? (
            <div>
            <p>
                I don't more than 50% of redux. But if you know 50% of it, you're like a Superman.
            </p>
            </div>
        ) : (
            ""
        )}
        </>
    )
}
