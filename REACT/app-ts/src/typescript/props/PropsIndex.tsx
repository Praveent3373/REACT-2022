import React from 'react'
import { Greet } from './1.Greet'
import Person from './2.Person'
import PersonList from './3.PersonList'
import AdvProps from './4.AdvProps'
import EventProps from './5.EventProps'
import StyleProps from './6.StyleProps'
import PropsTips from './7.PropsTips'

const PropsIndex = () => {
  const person = {
    first: 'naveen',
    last: 'kumar'
  }
  const personList = [
    {fname: 'Naveen', last: 'Kumar'},
    {fname: 'Ganapth', last: 'Guptha'},
    {fname: 'Praveen', last: 'Kumar'},
  ]
  return (
    <>
      <h2>Props Index</h2>
      <Greet name = 'Praveen' count = {32} isLoggedin = {true} /> <br />
      <Person name= {person}/><br />
      <PersonList names = {personList}/><br />
      <AdvProps/>
      <EventProps/>
      <StyleProps/>
      <PropsTips/>
    </>
  )
}

export default PropsIndex