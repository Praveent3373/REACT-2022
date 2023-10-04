import React, { useState } from 'react'

export default function UnitTest(props) {
    const [counter, setCounter] = useState(0);
    return (
        <div>
            <h5>Testing App with Enzyme</h5>
            <h6>Explore UI</h6>
            <div id="props">Welcome {props.name}</div>
            <div id="state_value">{counter}</div>
            <button id='increment' onClick={() => setCounter(counter + 1)}>Update Count</button>
        </div>
    )
}
