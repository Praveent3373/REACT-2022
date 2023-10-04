import React, { useState } from 'react'
import { Navigate } from 'react-router-dom'


const ProtectedRoute = ({children}: {children: JSX.Element}) => {
    const name = children.props.user;
    console.log(name);
    if(!name){
        return <Navigate to='/login' />
    }
    else{
        return children
    }

}

export default ProtectedRoute