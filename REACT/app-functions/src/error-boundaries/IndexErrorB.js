
import React from 'react'
import ErrorBoundary from './ErrorBoundary'
import { Hero } from './Hero'

export const IndexErrorB = () => {
        return (
            <>  
                <h1>Error Boundaries</h1>
                <ErrorBoundary>
                    <Hero heroName= 'Superman'/>
                </ErrorBoundary>
            
                <ErrorBoundary>
                    <Hero heroName= 'Batman'/>
                </ErrorBoundary>
            
                <ErrorBoundary>
                    <Hero heroName= 'Joker'/>
                </ErrorBoundary>
            </>
        )
}
