import React, { useMemo, useState } from 'react'
import Usestate from './Usestate'

const UseMemoHook = () => {
  return (
    <>
      {/* <MemoExample1/> */}
      <MemoExample2/>
    </>
  )
}

const expensiveCalc = (times:number):void => {
  for(let i = 0; i < times; i++){
      console.log('Go...', i + 1)
  }
}

const MemoExample1 = () => {
  const [count, setCount] = useState(0)
  const increment = () => {
    setCount((prevCount) => prevCount +1)
  }
  const expensiveCalcValue = useMemo(() => {
       return expensiveCalc(2)
  },[])
  return (
    <>
        <h2>Count: {count}</h2>
        <div></div>
        <button onClick={increment}>Increment +</button>
    </>
  )
} 

const expensiveCalc2 = (num:number) => {
    console.log('Caluculatin...');
    for(let i = 0; i < 50000000; i++){
      num +=1
    }
    return num
}

const MemoExample2 = () => {
  const [todos, setTodo] = useState<string[]>([])
  const [count, setCount] = useState(0);
  
  const addTodo = ():void => {
    setTodo((prevTodo) => [...prevTodo, "New Todo"])
  }

  const expensiveValue = useMemo(() => {
     return expensiveCalc2(count);
  },[count])
  return <>
      <h2>Todos</h2>
      <button onClick={addTodo}>Add Todo</button>
      {todos.map((todo, index) => {
        return <h3 key={index}>{todo}</h3>
      })}
      <h2>Count: {count}</h2>
      <button onClick={() => setCount((prevCount) => prevCount +1)}>Increment +</button>
      <h2>Expensive Value: {expensiveValue}</h2>
      <h3></h3>
  </>
}

export default UseMemoHook