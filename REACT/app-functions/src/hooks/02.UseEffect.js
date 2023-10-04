import { useEffect, useState } from "react"
import axios from "axios";

const UseEffect = () => {
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(false);
    console.log(users);
    const fetchData = () => {
        setLoading(true)
        return axios.get('https://jsonplaceholder.typicode.com/users')
        .then(resp => {
            setLoading(false)
            const data = resp.data;
            setUsers(data);
        })
        .catch((error) => {
            setLoading(false);
            console.log('Error logged', error)
        })
    }
    useEffect(() => {
        fetchData();
    },[])
    return <>
        <h1>Users List</h1>
        {loading ? <h1>Loading please wait...</h1> :  
        <ul>
            {users.map(user => <li key={user.id}>{user.name}</li>)}    
        </ul>  }
    </>
}

export default UseEffect;