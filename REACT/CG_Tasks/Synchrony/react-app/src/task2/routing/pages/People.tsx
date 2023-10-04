import React from 'react'
import { Link, useParams } from 'react-router-dom'

const People = () => {
  const {name} = useParams();
  return (
    <>
        <h3>People</h3>
        <h4>Name: {name}</h4>
    </>
  )
}

export default People