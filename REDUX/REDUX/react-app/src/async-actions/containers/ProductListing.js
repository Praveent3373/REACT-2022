
import axios from 'axios';
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { ProductComponent } from './ProductComponent';
import { fetchProducts, setProducts } from '../actions/productActions';

export const ProductListing = () => {
    const products = useSelector((state) => state.products);
    const dispatch = useDispatch();
    // const fetchProducts = async () => {
    //     const response = await axios
    //     .get('https://fakestoreapi.com/products')
    //     .catch((err) => console.log("Err", err))
    //     dispatch(setProducts(response.data));
    // }
    useEffect(() => {
         dispatch(fetchProducts())
    },[])
    return (
        <div className='ui grid container' style={{margin: '40px 0 0 0'}}>
            <ProductComponent/>
        </div>
    )
}


//  dispatch(setProducts(response.data));

// when we pass this product in action it will going to action and that will return object and object will be taken by the reducer
