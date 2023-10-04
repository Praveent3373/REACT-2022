import axios from "axios";
import { useEffect, useState } from "react";
import { Product } from "./Product";

const url = 'https://course-api.com/react-prop-types-example'
const Index = () => {
    const [data, setData] = useState([]);
    const fetchData = () => {
        return axios.get(url)
        .then(resp => {
            setData(resp.data)
        })
        .catch((error) => console.log(error))
    }
    useEffect(() => {
        fetchData();
    },[])
    return <>
        <h1>Products</h1>
        <section className="products">
            {data.map(product => {
                return <Product key={product.id} {...product} />
            })}
        </section>
    </>
}

export default Index;