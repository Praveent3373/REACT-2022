import React from 'react';
import { render, cleanup } from '@testing-library/react';
import TestDomElements from './TestDomElements';

afterEach(cleanup);

describe('testing TestDomElements component', ()=> {
    test('counter value should be 0', ()=> {
        const {getByTestId} = render(<TestDomElements/>)
        expect(getByTestId('counter')).toHaveTextContent("The current value is 0")
    });
    test("button should be enabled", () => {
        const {getByTestId} = render(<TestDomElements/>);
        expect(getByTestId('button-up')).not.toHaveAttribute('disabled');
    })
    test("button should be disabled", () => {
        const {getByTestId} = render(<TestDomElements/>);
        expect(getByTestId('button-down')).toBeDisabled();
    })
})
