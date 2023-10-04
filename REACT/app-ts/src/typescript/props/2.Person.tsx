import React from 'react'

type Props = {
    name: {
        first: string;
        last: string;
    }
}

const Person = (props: Props) => {
    const {first, last} = props.name
    return (
        <>
            <h5>Name is {first} {last}</h5>     
        </>
    )
}

export default Person