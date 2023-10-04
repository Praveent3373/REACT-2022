
import React, { useState } from 'react'

export const Form = () => {
    const [name, setName] = useState('');
    const [mobile, setMobile] = useState('');
    const [people, setPeople] = useState([]);
    const handleSubmit = (e) => {
        e.preventDefault();
        if(name && mobile){
            const person = {id: new Date().getTime().toString(), name, mobile}
            console.log(person);
            setPeople((people) => {
                return [...people, person]
            })
            setName('')
            setMobile('')
        }
        else{
            console.log('empty values');
        }
    }
    return <>
        <form onSubmit={handleSubmit}>
            <div className="form-control">
                <label htmlFor="name">User Name</label>
                <input name="name" value={name} onChange={(e) => setName(e.target.value)} type="text" name='name' />
            </div>
            <div className="form-control">
                <label htmlFor="mobile">Mobile</label>
                <input name="mobile" value={mobile} onChange={(e) => setMobile(e.target.value)} type="text" name='name' />
            </div>
            <button type='submit'>Submit</button>
        </form>
        {
            people.map((user) => {
                const {id, name, mobile}  = user;
                return <h5 key={id}>{name} : {mobile}</h5>
            })
        }
    </>
}
