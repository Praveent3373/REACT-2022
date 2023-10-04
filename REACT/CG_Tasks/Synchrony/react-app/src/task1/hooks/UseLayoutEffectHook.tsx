import React, { useLayoutEffect, useRef, useState } from 'react'
import Usestate from './Usestate'


const UseLayoutEffectHook = () => {
  return (
      <>
      {/* <Counter/> */}
      <DomExample/>
      </>
  )
}

const Counter = () => {
    const [count, setCount] = useState(0);
    useLayoutEffect(() => {
        console.log(count);
    },[count])
    return <>
        <h2>Count is {count}</h2>
        <button onClick={() => setCount(count +1)}>Increment</button>
    </>
}

const DomExample = () => {
    const [showData, setShowData] = useState(false);
    const containerRef = useRef<HTMLDivElement>(null);
    const dataRef = useRef<HTMLUListElement>(null);
    const toggleLinks = () => {
        setShowData(!showData);
    }
    useLayoutEffect(() => {
        const dataHeight = dataRef.current?.getBoundingClientRect().height;
        if(showData){
         if(containerRef.current) {
            containerRef.current.style.height = `${dataHeight}px`  
         }
        }
        else{
            if(containerRef.current){
                containerRef.current.style.height = '0px';
            }
        }
    },[showData])
    return <>
        <div>
        <button onClick={toggleLinks}>Show / Hide</button>
        <div style={{height: '0px', overflow: 'hidden'}} ref={containerRef}>
            <ul className="data" ref={dataRef}>
               <li>Link1</li>
               <li>Link1</li>
               <li>Link1</li>
               <li>Link1</li>
            </ul>
        </div>
        </div>
    </>
}

export default UseLayoutEffectHook

