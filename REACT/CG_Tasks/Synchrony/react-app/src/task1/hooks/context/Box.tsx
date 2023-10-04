import React, { useContext, useState } from 'react'
import { ThemeContext } from './ThemeContext'

type Props = {
    name: string,
    email: string
}

const Box = () => {
    const userContext = useContext(ThemeContext)
    const handleLogin = () => {
        userContext.setUser({
            name: 'Naveen kumar',
            email: 'navn@gmail.com'
        })
  }
  const handleLogout = () => {
        userContext.setUser(null);
  }
  return (
    <div>
        <button onClick={handleLogin}>Login</button>   
        <button onClick={handleLogout}>Logout</button>
        <h4>username: {userContext.user?.name} </h4>   
        <h4>email: {userContext.user?.email}</h4>   
    </div>
  )
}

export default Box