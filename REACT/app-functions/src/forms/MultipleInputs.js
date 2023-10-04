
import React, { useState } from 'react'

export const MultipleInputs = () => {
    const [user, setUser] = useState({name: '', email: '', mobile: ''});
    const [people, setPeople] = useState([]);
    const handleChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setUser({...user, [name]: value})
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        if(user.name && user.email && user.mobile){
            const newPerson = {...user, id: new Date().getTime().toString()};
            setPeople([...people, newPerson])
            setUser({name: '', email: '', mobile: ''})
        }
    }
    return <>
        <form onSubmit={handleSubmit}>
            <div className="form-control">
                <label htmlFor="name">Name</label>
                <input onChange={handleChange} value={user.name} type="text" name='name' />
            </div>
            <div className="form-control">
                <label htmlFor="email">Email</label>
                <input onChange={handleChange} value={user.email} type="email" name='email' />
            </div>
            <div className="form-control">
                <label htmlFor="mobile">Mobile</label>
                <input onChange={handleChange} value={user.mobile} type="text" name='mobile' />
            </div>
            <button type='submit'>Submit</button>
        </form>
        {people.map((person) => {
            const {id, name, email, mobile} = person;
            return <article key={id}>
                <h5>Name: {name}</h5>
                <h5>Email: {email}</h5>
                <h5>Mobile: {mobile}</h5>
            </article>
        })}
    </>
}
