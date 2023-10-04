import { createRef, forwardRef, useEffect, useRef } from "react";

const UseRef = () => {
    const inputRef = createRef(null);
    const input1 = createRef(null);
    const input2 = createRef(null);
    // forward multiple refs
    const ref1 = createRef(null);
    const ref2 = createRef(null);
    const ref3 = createRef(null);
    const ref = useRef({ref1, ref2, ref3});
    useEffect(() => {
        inputRef.current.focus();
        console.log(ref.current);
    },[])
    return <>
        <h1>useRef Hook</h1>
        <input ref={inputRef} type="text" placeholder="auto focus" />
        <input ref={input1} type="text" placeholder="inpu1" />
        <input ref={input2} type="text" placeholder="inpu2" />
        <br />
        <button onClick={() => input1.current.focus()}>Input 1</button>
        <button onClick={() => input2.current.focus()}>Input 2</button>
        
        <ChildRef ref = {ref} /> <br />
        <button onClick={() => ref1.current.focus()}>FRef 1</button>
        <button onClick={() => ref2.current.focus()}>FRef 2</button>
        <button onClick={() => ref3.current.focus()}>FRef 3</button>
    </>
}

// forwardRef
const ChildRef = forwardRef((props, ref ) => {
    const {ref1, ref2, ref3} = ref.current;
    console.log(ref.current);
    return <>
        <h1>forward ref</h1>
        <input ref={ref1} type="text" placeholder="forward ref1" />
        <input ref={ref2} type="text" placeholder="forward ref2" />
        <input ref={ref3} type="text" placeholder="forward ref3" />
    </>
})

export default UseRef;