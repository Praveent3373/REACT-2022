import React, { useCallback, useState } from 'react'

const UseCallbackHook = () => {
  const [count, setCount] = useState(0);
  
  const Increment = useCallback(() => {
    setCount((prevCount) => prevCount + 1)
  },[])
  
  return (
    <>
        <h2>Count: {count}</h2>
        <ChildComponent name='Praveen Kumar' handle = {Increment}/>
    </>
  )
}

type ChildProps = {
    name: string
    handle: () => void
}

const ChildComponent = React.memo(({handle, name}: ChildProps) => {
    console.log('child component re-rendered')
    return <>
        <h4>{name}</h4>
        <button onClick={handle}>Increment +</button>
    </>
})


export default UseCallbackHook