import React from 'react';
import { render, cleanup, fireEvent  } from '@testing-library/react';
import CounterProvider, { Counter, CounterContext } from './4.TestingContext';

const renderWithContext = (component) => {
    return {
        ...render(
            <CounterProvider value = {CounterContext}>{component}</CounterProvider>
        )
    }
}

afterEach(cleanup);

describe("testing TestingContext component", () => {
    test('initial state is 0', () => {
        const {getByTestId} = renderWithContext(<Counter/>)
        expect(getByTestId('counter')).toHaveTextContent('0')
    })
    test("increments the counter", () => {
        const {getByTestId} = renderWithContext(<Counter/>)
        fireEvent.click(getByTestId('button-up'))
        expect(getByTestId('counter')).toHaveTextContent('1')
    })
    test("decrements the counter", () => {
        const {getByTestId} = renderWithContext(<Counter/>)
        fireEvent.click(getByTestId('button-down'))
        expect(getByTestId('counter')).toHaveTextContent('-1')
    })
})