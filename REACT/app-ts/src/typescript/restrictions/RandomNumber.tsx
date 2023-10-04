import React from 'react'

type RandomNumberType = {
    value: number
}

type PositiveNumber = RandomNumberType & {
    isPositive: boolean
    isNegative?: never
    isZero?: never
}
type NegativeNumber = RandomNumberType & {
    isNegative: boolean
    isPositive?: never
    isZero?: never
}
type Zero = RandomNumberType & {
    isZero: boolean
    isNegative?: never
    isPositive?: never
}

type RandomNumberProps = PositiveNumber | NegativeNumber | Zero


const RandomNumber = ({value, isPositive, isNegative, isZero}: RandomNumberProps) => {
  return (
    <div>
        {value}
        {isPositive && 'Positive'}
        {isNegative && 'Negitive'}{''}
        {isZero && 'Zero'}
    </div>
  )
}

export default RandomNumber