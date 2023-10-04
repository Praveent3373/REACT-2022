
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom';
const url = 'https://jsonplaceholder.typicode.com/users';

export const Person = () => {
    const [user, SetUser] = useState([]);
    const {id} = useParams();
    console.log(user);
    const fetchData = () => {
        return axios.get(url)
        .then((resp) => {
            const data = resp.data;
            const newPerson = data.find((person) => person.id === parseInt(id))
            SetUser([newPerson]);
        })
    }
    useEffect(()=> {
       fetchData();
    },[])
    return (
        <>
            {user.map(user => {
                const {name, username, id, email} = user;
                const {street, suite, city, zipcode} = user.address;
                return <article key={id}>
                    <h1>{name}</h1>
                    <p>UserName: {username}</p>
                    <p>Email: {email}</p>
                    <p>Address: {street}, {suite}, {city}, {zipcode}</p>
                </article>
            })}
            <Link to='/people'>Back to People</Link>
        </>
    )
}
