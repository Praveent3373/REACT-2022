
import React, { useState } from 'react'

export const ShortCircuit = () => {
    const [text, setText] = useState('');
    const [isError, setError] = useState(false);
    // const firstValue = text || 'hello world'
    // const secondValue = text && 'hello world'
    return (
        <>
            <h1>{text || 'naveen'}</h1>
            <button onClick={() => setError(!isError)}>Toggle Error</button>
            {isError && <h1>Error</h1>}
            {isError ? (<p>there is an error</p>) : (<h5>there is no error</h5>)}
        </>
    )
}
