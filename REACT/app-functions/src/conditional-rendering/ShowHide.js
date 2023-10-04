
import React, { useEffect, useState } from 'react'

export const ShowHide = () => {
    const [show, setShow] = useState(false);
    return (
        <>
            <button onClick={() => setShow(!show)}>Show / Hide</button>
            {show && <Item/>}
        </>
    )
}

const Item = () => {
    const [size, setSize] = useState(window.innerWidth);
    const checkSize = () => setSize(window.innerWidth);
    useEffect(()=> {
        window.addEventListener('resize', checkSize);
        return () => {
            window.removeEventListener('resize', checkSize);
        }
    },[])

    return (
        <>
        <h1>Window</h1>
        <h2>size: {size}</h2>
        </>
    )
}