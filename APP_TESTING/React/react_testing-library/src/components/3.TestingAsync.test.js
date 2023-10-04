import React from 'react';
import { render, cleanup, fireEvent, waitFor, screen  } from '@testing-library/react';
import TestingAsyc from './3.TestingAsync';

afterEach(cleanup);

describe("testing TestingAsync component", () => {
    test("increments counter after 0.5s", async () => {
        const {getByTestId} = render(<TestingAsyc/>);
        fireEvent.click(getByTestId('button-up'));
        const counter = await waitFor(() => screen.getByText('1'))
        expect(counter).toHaveTextContent('1')
    })
})