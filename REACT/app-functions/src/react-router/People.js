import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
const url = 'https://jsonplaceholder.typicode.com/users';

const People = () => {
const [people, setPeople] = useState([]);
const fetchData = () => {
    return axios.get(url)
    .then(resp => {
        setPeople(resp.data)
    })
    .catch((error) => console.log(error))
}
useEffect(() => {
    fetchData()
},[])
    return (
        <div>
        <h1>People Page</h1>
        {people.map((person) => {
            return (
            <div key={person.id} className='item'>
                <h4>{person.name}</h4>
                <Link to={`/person/${person.id}`}>Show More</Link>
            </div>
            );
        })}
        </div>
    );
};

export default People;