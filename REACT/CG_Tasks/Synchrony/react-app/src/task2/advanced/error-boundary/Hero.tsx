import React from 'react'

interface HeroProps{
  heroName: string
}

const Hero = ({heroName}:HeroProps) => {
  if(heroName === 'Joker'){
    throw new Error('Not a Hero');
  }
  return (
    <>
      <h4>{heroName}</h4>
    </>
  )
}

export default Hero