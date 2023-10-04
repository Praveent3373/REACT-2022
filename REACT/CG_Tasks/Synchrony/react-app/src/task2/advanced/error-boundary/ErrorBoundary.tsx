import React, { Component } from 'react'

interface ErrorProps {
    children?: React.ReactNode
}

interface ErrorState{
  hasError: boolean
}

class ErrorBoundary extends Component<ErrorProps, ErrorState>  {
  constructor(props: ErrorProps){
    super(props);
    this.state = {
      hasError: false
    }
  }
  static getDerivedStateFromError(error:any){
    return {
      hasError: true
    }
  }
  componentDidCatch(error: any, info: any){
    console.log(error);
    console.log(info)
  }


  render(){
      return (
        <>
          {this.state.hasError ? <p>Something Went wrong</p> : <h4>{this.props.children}</h4>}
        </>
      )
  }
}

export default ErrorBoundary