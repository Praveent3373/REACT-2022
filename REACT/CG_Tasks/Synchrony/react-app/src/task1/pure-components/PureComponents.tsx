import { extname } from 'node:path/win32'
import React, { Component, memo, PureComponent, useState } from 'react'


const PureComponents = () => {
  return (
    <div>
        {/* <FnComponent/> */}
        <ClsComponent message = 'The count value is '/>
    </div>
  )
}

// functional component
const FnComponent = () => {
    const [count, setCount] = useState(0)
    const handleUpdate = () => setCount(prevCount => prevCount +1)
    return <>
        <h2>React memo Example</h2>
        <h2>Count: {count}</h2>
        <button onClick={handleUpdate}>Increment</button>
        <FnChildComponent name='naveen kumar'/>
    </>
}

type FnChildComponentProps = {
    name: string
}

const FnChildComponent = memo(({name}:FnChildComponentProps) => {
    console.log('Child Component Rendered')
    return <>
        <h2>Function Child Component</h2>
        <h4>{name}</h4>
    </>
})



// class component
type Props = {
    message: string
}
type State = {
    count: number
}

class ClsComponent extends Component<Props, State>{
    state = {
        count: 0
    }
    handleUpdate = () => {
        this.setState((prevCount) => ({count: prevCount.count + 1}))
    }
    render() {
        return <>
            <h2>class component</h2>
            <h4>{this.props.message}{this.state.count}</h4>
            <button onClick={this.handleUpdate}>Increment</button>
            <ChildClsComponent name='Naveen Kumar'/>
        </>
    }
}

type ChildClsComponentProps = {
    name: string
}
class ChildClsComponent extends PureComponent<ChildClsComponentProps> {
    
    render() {
        console.log('Class child component rendered')
        return <>
            <h4>{this.props.name}</h4>
        </>
    }
}


export default PureComponents