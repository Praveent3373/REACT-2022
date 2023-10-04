import { useEffect, useState } from "react";

const useFetch = (url) => {
    const [data, setData] = useState([]);
    useEffect(() => {
        fetch(url).then((resp) => resp.json()).then((data) => {
            setData(data);
        })
    },[])
    return data;
}

const UseCustom = () => {
    const users = useFetch('https://jsonplaceholder.typicode.com/users');
    const todos = useFetch('https://jsonplaceholder.typicode.com/todos');
    return <>
        <h1>useCustom hook</h1>
        <h2>Users</h2>
        <div>
            {
                users.map(user => {
                    const {id, name} = user;
                    return <p key={id}>{name}</p>
                })
            }
        </div>
        <h2>Todo's</h2>
        <div>
            {
                todos.map(todo => {
                    const {id, title} = todo;
                    return <p key={id}>{title}</p>
                })
            }
        </div>
    </>
}

export default UseCustom;