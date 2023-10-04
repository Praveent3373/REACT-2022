import React from 'react'

const EventProps = () => {
    return (
        <>
            <h3>Event Props</h3>
            <Button handleClick={(event, id) => {
                console.log('Button cliked', event, id)
            }}/> <br />
            <InputEvent value='' handleChange={(event) => console.log(event)}/>
        </>
    )
}



// example1
type ButtonProps = {
    handleClick: (event: React.MouseEvent<HTMLButtonElement>, id:number) => void;
}
const Button = (props:ButtonProps) => {
    return <>
        <button onClick={(event) => props.handleClick(event, 1)}>Click</button>
    </>
}



// example2
type InputProps = {
    value: string,
    handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void
}
const InputEvent = (props:InputProps) => {
    // const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    //     console.log(event)
    // }
    return <>
        <input type="text" value={props.value} onChange={props.handleChange} />
    </>
}




export default EventProps