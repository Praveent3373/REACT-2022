import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import {ordered, restacked} from './iceSlice'
const IceView = () => {
  const [value, setValue] = useState(1);
  const numOfIces = useSelector((state) => state.iceCream.numOfIces)
  const dispatch = useDispatch();
  return (
    <div>
        <h2>Number of Ice creams {numOfIces}</h2>
        <button onClick={() => dispatch(ordered())}>Order ice cream</button>
        <div>
          <label htmlFor="">Restack by input</label>
          <input type="number" value={value} onChange={(e) => setValue(parseInt(e.target.value))} />
        </div>
        <button onClick={() => dispatch(restacked(value))}>Restack ice cream</button>
    </div>
  )
}

export default IceView;