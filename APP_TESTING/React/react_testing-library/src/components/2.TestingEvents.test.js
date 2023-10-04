import React from 'react';
import { render, cleanup, fireEvent } from '@testing-library/react';
import TestingEvents from './2.TestingEvents';

afterEach(cleanup);

describe("testing TestingEvents component", () => {
    test("increments counter", () => {
        const {getByTestId} = render(<TestingEvents/>);
        fireEvent.click(getByTestId('button-up'));
        expect(getByTestId('counter')).toHaveTextContent('1');
    })
    test("decrements counter", () => {
        const {getByTestId} = render(<TestingEvents/>);
        fireEvent.click(getByTestId('button-down'));
        expect(getByTestId('counter')).toHaveTextContent('-1')
    })
})