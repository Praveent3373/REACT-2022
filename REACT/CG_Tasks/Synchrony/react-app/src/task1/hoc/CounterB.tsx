import React from 'react'
import { CounterWrappedProps, HocCounter } from './Hoc'

const CounterB = ({count, increment, data}: CounterWrappedProps) => {
  return (
    <>
      <h3>Counter-B</h3>
      <h5>Count: {count}</h5>
      {data.map(item => {
        return <h5>Name: {item.name} - Account:{item.acc}</h5>
      })}
      <button onClick={increment}>Update</button>
    </>
  )
}

export default HocCounter(CounterB)