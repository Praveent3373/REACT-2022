import React from 'react'

type Greet = {
    name: string,
    count: number,
    isLoggedin: boolean
}

export const Greet = (props: Greet) => {
    const {name, count, isLoggedin} = props
  return (
    <h6> 
          {isLoggedin? `Welcome ${name} you have ${count} messages`: `Welcome Guest`} 
    </h6>
  )
}