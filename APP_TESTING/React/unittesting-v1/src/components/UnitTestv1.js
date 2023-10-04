
import React, { useState } from 'react'

function UnitTestv1() {
    const [count, setCount] = useState({value: 0, isDisable: true});
    const updateCount2 = () => {
        setCount(() => {
            return {...count, value: count.value + 1};
        })
    }
    return (
        <div>
            <button id='enable' data-testid="button-up" onClick={updateCount2}>Increment</button>
                <div id='value2'>the new value is: {count.value}</div>
            <button disabled data-testid="button-down">Down</button>
        </div>
    )
}
export default UnitTestv1