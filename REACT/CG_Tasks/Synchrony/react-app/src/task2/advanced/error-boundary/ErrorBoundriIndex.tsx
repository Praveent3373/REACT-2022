import React from 'react'
import ErrorBoundary from './ErrorBoundary'
import Hero from './Hero'

const ErrorBoundriIndex = () => {
  return (
    <>
        <h2>Error Boundary</h2>
        <ErrorBoundary>
            <Hero heroName = 'SuperMan'/>
        </ErrorBoundary>
        <ErrorBoundary>
            <Hero heroName = 'BatMan'/>
        </ErrorBoundary>
        <ErrorBoundary>
            <Hero heroName = 'Joker'/>
        </ErrorBoundary>
    </>
  )
}

export default ErrorBoundriIndex