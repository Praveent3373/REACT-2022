import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

interface LoginProps{
  setUser: React.Dispatch<React.SetStateAction<string>>
}

const Login = ({setUser}: LoginProps) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  
  const navigate = useNavigate();
  
  const handleSubmit = async (e:React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if(!name || !email) {
       alert('Enter all fields')
    }
    else{
      setUser(name);
      navigate('/dashboard');
    }
  }
  return (
    <form action="" onSubmit={handleSubmit}>
      <h3>Login</h3>
      <input value={name} onChange={(e) => setName(e.target.value)} type="text" placeholder='Name' /> <br />
      <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder='Email' /> <br />
      <button type='submit'>Login</button>
    </form>
  )
}

export default Login