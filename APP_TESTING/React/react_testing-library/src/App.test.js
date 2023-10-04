import { cleanup, render } from '@testing-library/react';
import App from './App';

// Render a react component to the dom
// Use DOM APIs (query selector) to make assertions

afterEach(cleanup);

it('should take a snapshot', () => {
  const {asFragment} = render(<App/>)
  expect(asFragment(<App/>)).toMatchSnapshot();
});
