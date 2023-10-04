import React from 'react'
import { Private } from './Private'
import { Profile } from './Profile'

// Pass component as Prop 

const AuthIndex = () => {
    return (
        <div>
            <Private isLoggedIn={true} component = {Profile}/>
        </div>
    )
}

export default AuthIndex