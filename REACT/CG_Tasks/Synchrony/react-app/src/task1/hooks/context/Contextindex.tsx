import React from 'react'
import Box from './Box'
import { ThemeContextProvider } from './ThemeContext'


const Contextindex = () => {
  return (
    <ThemeContextProvider>
        <Box/>
    </ThemeContextProvider>
  )
}

export default Contextindex