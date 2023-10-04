import React, { Children } from 'react'


const PropsChildren = () => {
  return (
    <div>
        <Courses title = 'Courses'>
            <h5>React Js</h5>
            <h5>Angular</h5>
            <h5>Vue Js Js</h5>
        </Courses>
    </div>
  )
}

type CoursesProps = {
    title: string
    children: JSX.Element | JSX.Element[]
    // for single element "JSX.Element"
    // for multiple elements "JSX.Element | JSX.Element[]" 
}

const Courses = ({children, title}: CoursesProps) => {
    return <>
        <h2>{title}</h2>
        {children}  
    </>
  }

export default PropsChildren