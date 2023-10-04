import React from 'react'

type List = {
    names: {
        fname: string,
        last: string
    }[]
}

const PersonList = (props: List) => {
    return (
        <>
        <h3>TS with List</h3>
        <div>{props.names.map((name, i) => {
            return <h6 key={i}>{i}: {name.fname} {name.last} </h6>
        })}</div>
        </>
    )
}

export default PersonList