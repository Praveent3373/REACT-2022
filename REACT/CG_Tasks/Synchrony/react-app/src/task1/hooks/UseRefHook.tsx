import React, { useEffect, useRef } from 'react'

const UseRefHook = () => {
  return (
    <>
    <div>UseRefHook</div>
    <InputRef/>
    </>
  )
}

const InputRef = () => {
    const input1 = useRef<HTMLInputElement>(null);
    const input2 = useRef<HTMLInputElement>(null);
    return <>
        <input type='text' ref={input1} placeholder='input1'/>
        <input type='text' ref={input2} placeholder='input2'/>
        <button onClick={() => input1.current?.focus()}>input1</button>
        <button onClick={() => input2.current?.focus()}>input2</button>
    </>
}

export default UseRefHook