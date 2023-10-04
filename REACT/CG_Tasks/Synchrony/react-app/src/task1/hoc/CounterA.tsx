import React, { useState } from 'react'
import { CounterWrappedProps, HocCounter } from './Hoc'


const CounterA = ({count, increment, data}: CounterWrappedProps) => {
  return (
    <div>
      <h3>Counter-B</h3>
      <h5>Count: {count}</h5>
      {data.map(user => {
        return <h5>{user.name}</h5>
      })}
      <button onClick={increment}>Update</button> 
    </div>
  )
}

export default HocCounter(CounterA)