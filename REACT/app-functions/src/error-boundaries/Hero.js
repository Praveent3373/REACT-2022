
import React from 'react'

export const Hero = ({heroName}) => {
    if(heroName === 'Joker'){
        throw new Error('Not a Hero');
    }
    return (
        <>
            <h5>{heroName}</h5>
        </>
    )
}
