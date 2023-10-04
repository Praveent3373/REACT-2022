import React, { useEffect, useState } from 'react'

const url = 'https://api.github.com/users/QuincyLarson';

export const MultipleReturns = () => {
    const [isLoading, setLoading] = useState(true);
    const [isError, setError] = useState(false);
    const [user, setUser] = useState('default user');
    useEffect(() => {
        fetch(url)
        .then((resp) => {
            if(resp.status >= 200 && resp.status <= 299){
                return resp.json();
            }
            else{
                setLoading(false);
                setError(true);
                throw new Error(resp.statusText)
            }
        })
        .then((user) => {
            const {login} = user;
            setUser(login);
            setLoading(false);
        })
        .catch((error) => console.log(error))
    },[])
    if(isLoading){
        return <h1>Loading...</h1>
    }
    if(isError){
        return <h1>Error...</h1>
    }
    return <h1>{user}</h1>
}
