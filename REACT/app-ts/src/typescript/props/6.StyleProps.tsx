import React from 'react'

const StyleProps = () => {
    return (
        <>
            <Container styles={{border: '1px solid black', padding: '1rem', display: 'block'}}/>
        </>
    )
}

type ContainerProps = {
    styles: React.CSSProperties
}
const Container = (props: ContainerProps) => {
    return <div style = {props.styles}>Text content goes here</div>
}

export default StyleProps