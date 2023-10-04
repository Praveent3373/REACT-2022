import React, { useEffect, useRef, useState } from 'react'


const UseEffect = () => {
  return (
    <>
        <div>UseEffect</div>
        <Counter/>
    </>
  )
}

const Counter = () => {
    const [count, setCount] = useState(0);
    useEffect(() => {
      const interval = setInterval(() => {
          setCount((prevCount) => prevCount +1 )
      },1000)
      return () => clearInterval(interval)
    },[count])
    return <>
      <h1>Counter: {count}</h1>
    </>
}





export default UseEffect