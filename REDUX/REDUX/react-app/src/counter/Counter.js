import { useDispatch, useSelector } from "react-redux";
import { increment, decrement, reset } from "./actions";

export const Counter = () => {
    const value = useSelector((state) => state.counterReducer.count);
    const dispatch = useDispatch();
    return <>
        <h1>Counter Application</h1>
        <h4>Value: {value}</h4>
        <button onClick={() => dispatch(increment())}>Increment</button>
        <button onClick={() => dispatch(decrement())}>Increment</button>
        <button onClick={() => dispatch(reset())}>Increment</button>
    </>
}
