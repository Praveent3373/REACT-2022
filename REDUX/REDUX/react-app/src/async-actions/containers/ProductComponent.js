import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom';


export const ProductComponent = () => {
    const products = useSelector((state) => state.products.allProducts.products);
    console.log(products);
    return <>
        {products.map((product) => {
            const {id, title, image, price, category} = product;
            return <div className='four wide column' key={id}>
                <Link to={`product/${id}`}>
                <div className="ui link cards">
                    <div className="card">
                        <div className="image">
                            <img src={image} alt={title} width="100%" />
                        </div>
                        <div className="content">
                            <div className="description">{title}</div>
                            <div className="meta price">$ {price}</div>
                            <div className="header">{category}</div>
                        </div>
                    </div>
                </div>
                </Link>
            </div>
        })}
    </>

    }