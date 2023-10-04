import React from 'react'
import { Box } from './Box'
import { ThemeContextProvider } from './ThemeContext'
import { UserContextProvider } from './UseContext'
import User from './User'

const ContextApp = () => {
    return (
        <>
            {/* <ThemeContextProvider>
                    <Box/>
            </ThemeContextProvider>  */}

            <UserContextProvider>
                <User/>
            </UserContextProvider>
        </>
        )
}

export default ContextApp