import React, { useCallback, useState } from 'react'
import { useToggle } from './useToggle'


const CustomHooks = () => {
  return (
    <div>
        <ToggleData/>
    </div>
  )
}

const ToggleData = () => {
  const [show, toggle, close, open] = useToggle(true);
  return <>
            <div className="button-group" style={{display: 'flex', justifyContent: 'space-evenly'}}>
                <button onClick={open}>Open</button>
                <button onClick={close}>Close</button>
                <button onClick={toggle}>Toggle</button>
            </div>
            {show && (<div className="container">
                <h3>Custom hook Content</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Id nemo illum officiis, quis asperiores fugit earum quasi soluta laboriosam vitae numquam quia cumque facere nulla quisquam laudantium expedita dicta quas.</p>
            </div>)}
        </>
}




export default CustomHooks