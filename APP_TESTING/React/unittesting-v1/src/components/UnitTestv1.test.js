import { getByTestId, getByText, render } from '@testing-library/react';
import Enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import UnitTestv1 from './UnitTestv1'
Enzyme.configure({ adapter: new Adapter() });

describe("test cases for UnitTestV1", () => {
    test("should render the button", () => {
        const wrapper = shallow(<UnitTestv1 />)
        expect(wrapper.find('#enable')).toHaveLength(1);
        expect(wrapper.find('#enable').text()).toBe('Increment')
    })
    test("Increment value by 1 when button is clicked", () => {
        const wrapper = shallow(<UnitTestv1 />)
        wrapper.find('#enable').simulate('click');
        expect(wrapper.find('#value2').text()).toBe('the new value is: 1')
    })
    test('this button should be enabled', () => {
        const { getByTestId } = render(<UnitTestv1 />); 
        expect(getByTestId('button-up')).not.toHaveAttribute('disabled');
    });
    test('this button should be disabled', () => {
        const { getByTestId } = render(<UnitTestv1 />); 
        expect(getByTestId('button-down')).toBeDisabled()
    });
    
})
