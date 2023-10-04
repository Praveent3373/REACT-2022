
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { orderIce_Cream, restackIce_Cream, orderCake, restockCake } from './actions';
export const MultipleReducers = () => {
    const count = useSelector((state) => state.ice.count);
    const value = useSelector((state) => state.cake.count);
    const dispacth = useDispatch();
    console.log(count);
    return (
        <>
        <h1>Multiple Reducers</h1>
        <h4>Number Of Cakes : {value}</h4>
        <h4>Number Of Ice Creams: {count} </h4>
        <div>
            <button onClick={() => dispacth(orderCake())}>Order Cake</button>
            <button onClick={() => dispacth(restockCake(2))}>Restock Cake</button>
        </div>
        <div>
            <button onClick={() => dispacth(orderIce_Cream())}>Order Ice Cream</button>
            <button onClick={() => dispacth(restackIce_Cream(5))}>Restock Ice Cream</button>
        </div>
        </>
    )
}
