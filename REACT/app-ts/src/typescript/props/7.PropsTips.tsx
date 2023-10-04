import React from 'react'
import { Props1Props } from './PropsTips.type'


const PropsTips = () => {
    return (
        <>
            <Props1 name='naveen' age = {23}/>
        </>
    )
}

// #1. maintain types in 1 file & destructuring

const Props1 = ({name, age}: Props1Props) => <h6>{name} {age}</h6>

// #2. reusing types 

// #file: PropsTips.types.ts

// export type Name = {
//     first: string,
//     last: string
// }
// export type Props1Props = {
//     name: Name
// }

// type PersonListProps = {
//     // name: {
//     //     first: string,
//     //     last: string
//     // }[]
//     name: Name[]
// }


export default PropsTips