import React, { useState } from 'react'


const Usestate = () => {
  return (
    <>
    <div>Usestate</div>
    <Counter/> <br />
    <LoggedIn/>
    </>
  )
}


const Counter = () => {
    const [count, setCount] = useState(0)
    const increment = () => setCount((prevState) => prevState + 1)
    const decrement = () => setCount(count - 1)
    const reset = () => setCount(0)
    return <>
            <h2>Count: {count}</h2>
            <button onClick={increment}>Increment</button>
            <button onClick={decrement}>Decrement</button>
            <button onClick={reset}>Reset</button>
    </>
}

type AuthUser = {
    name: string,
    email:string
}

const LoggedIn = () => {
    const [user, setUser] = useState< null | AuthUser>(null);
    const handleLoggin = () => setUser({
        name: 'Navn',
        email: 'navn@gmail.com'
    })
    const handleLogout = () => setUser(null);
    return <>
        <h6>username is {user?.name}</h6>
        <h6>email is {user?.email}</h6>
        <button onClick={handleLoggin}>LogIn</button>
        <button onClick={handleLogout}>LogOut</button>
    </>
}



export default Usestate