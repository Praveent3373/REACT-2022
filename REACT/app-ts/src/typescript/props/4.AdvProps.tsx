import React from 'react'

type Props = {}

const AdvProps = (props: Props) => {
    return (
        <>
        <h3>4.AdvProps</h3>
        <Status status='loading'/>
        <Heading>Place Holder text</Heading>
        <Oscor>
            <Heading>Heading as Child prop</Heading>
        </Oscor>
        <Optional name='Naveen Kumar'/>    
        </>
    )
}

// status
type StatusProps = {
    status: 'loading' | 'success' | 'error'
}
const Status = (props: StatusProps) => {
    let message;
    if(props.status === 'loading'){
        message = 'Data is loading'
    }
    else if(props.status === 'success'){
        message = 'Data fetched Successfully'
    }
    else{
        message = 'Error in loading Data'
    }
    return <>
        {message}
    </>
}

// with children props which can be passed to react components
type HeadingProps = {
    children: string
}
const Heading = (props: HeadingProps) => {
    return <>
        <h6>{props.children}</h6>
    </>
}

// compoent as children prop
type OscorProps = {
    children: React.ReactNode
}
const Oscor = (props: OscorProps) => {
    return <>
        {props.children}
    </>
}

// Optional
type OptionalProps = {
    name: string,
    count?: number
}
const Optional = (props: OptionalProps) => {
    const {name, count = 26} = props;
    return <>
        <h6>Hey {name} you have received {count} messages</h6>
    </>
}


export default AdvProps