import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import {ordered, restacked} from './cakeSlice'

const CakeView = () => {
  const numOfCakes = useSelector((state) => state.cake.numOfCakes )
  const dispatch = useDispatch();
  return (
    <div>
        <h2>Number of cakes {numOfCakes}</h2>
        <button onClick={() => dispatch(ordered())}>Order Cake</button>
        <button onClick={() => dispatch(restacked(4))}>Restack Cake</button>
    </div>
  )
}

export default CakeView;