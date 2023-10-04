import React, {  SyntheticEvent, useState } from 'react'

const StateLifting = () => {
const [todos, setTodos] = useState(['todo1', 'todo2'])
return (
    <>
        <ComponentA todos = {todos}/>
        <ComponentB todos = {todos}/>
        <ComponentC setTodos = {setTodos}/>
        
    </>
  )
}

type ComponentABProps = {
    todos: string[]
}

const ComponentA = ({todos}: ComponentABProps) => {
    return <>
        <h2>No of Todos: {todos.length}</h2>
    </>
}

const ComponentB = ({todos}: ComponentABProps) => {
    return <>
        <ul>{todos.map((todo, index) => {
            return <li key={index}>{todo}</li>
        })}</ul>
    </>
}

type ComponentCProps = {
    setTodos: React.Dispatch<React.SetStateAction<string[]>>
}
const ComponentC = ({setTodos}: ComponentCProps) => {
    const handleSubmit = (e:any):void =>{
        e.preventDefault();
        setTodos((prevTodos) => [...prevTodos, e.target.elements.todo.value])
    } 
    return <>
    <form onSubmit={handleSubmit}>
        <input type="text" id='todo'/>
        <button type='submit'>Add Item</button>
    </form>
    </>
}


export default StateLifting