import { useMemo, useState } from "react";

const heavyProcess = (times) => {
    for(let i = 0; i < times; i++){
        console.log('Go...', i + 1)
    }
    return `Heavy process done (result: ${times})`
}

const UseMemo = () => {
    const [count, setCount] = useState(0);
    const increment = () => {
        setCount((prevCount) => prevCount + 1)
    }
    //The returned value is saved
    //const heavyProcessValue = heavyProcess(1000)

    // the returned value is saved with useMemo
    const heavyProcessValue = useMemo(() => {
       return heavyProcess(1000)
    },[]) 
    return <>
        <h1>useMemo hook</h1>
        <h2>{count}</h2>
         {/*The returned value is printed*/}
         <p>{heavyProcessValue}</p>
        <button onClick={increment}>Increment + </button>
    </>
}

export default UseMemo;

// We use useMemo when we must compute an excessive value, 
// and we do not want to re-compute it again every time our component re-renders.

// We are simulating a heavy process with the heavyProcess function that will print to the console the numbers
// from 1 to 1000 and return the last number printed (1000). Our UseMemo has a simple counter, and it
// prints the returned value of the heavyProcess function.

// If you go to the console, you will notice that all numbers from 1 to 1000 are being printed every single
// time we click the + button. So, every time the components re-renders (due to a change in its state)
// the heavyProcess executes again.

// Now, instead of passing the value that the heavyProcess function returns, we pass the memoized value that
// the useMemo hook gives us; this value will be computed again only if one of the dependencies changes.
// In our case, the array is empty, which means the value will be computed only once. 
// Do not forget the return statement in the first parameter of the useMemo hook.