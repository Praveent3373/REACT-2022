import { useState } from "react";

const Form1 = () => {
    const [user, setUser] = useState({name: '', email: '', password: ''});
    const [data, setData] = useState([]);
    const [msg, setMsg] = useState('');
    const handleSubmit = (e) => {
        e.preventDefault();
        if(user.name && user.email && user.password){
            let newItem = {...user, id: new Date().getTime().toString()};
            setData([...data, newItem]);
            setMsg('Form submited successfully')
            setUser({name: '', email: '', password: ''})
        }
        else{
            setMsg('All fields are mandatory to enter')
        }
    }
    const handleChange = (e) => {
        let name = e.target.name;
        let value = e.target.value;
        setUser({...user, [name]: value})
    }
    return (
        <div className="normal-form">
            <h1>Normal Form</h1>
            <form onSubmit={handleSubmit}>
                <div className="form-control">
                    <label htmlFor="name">Name</label>
                    <input value={user.name} onChange={handleChange} type="text" name="name"/>
                </div>
                <div className="form-control">
                    <label htmlFor="Email">Email</label>
                    <input value={user.email} onChange={handleChange} type="email" name="email"/>
                </div>
                <div className="form-control">
                    <label htmlFor="password">Password</label>
                    <input value={user.password} onChange={handleChange} type="password" name="password"/>
                </div>
                {msg? <h6>{msg}</h6>: null}
                <button type="submit">Submit Form</button>
            </form>
            {data.map(item => {
                const {id, name, email, password} = item;
                return <article key={id}>
                    <h5>{name}</h5>
                    <h5>{email}</h5>
                    <h5>{password}</h5>
                </article>
            })}
        </div>
    )
}

export default Form1;