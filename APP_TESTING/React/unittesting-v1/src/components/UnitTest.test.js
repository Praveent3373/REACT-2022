import Enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import UnitTest from './UnitTest';
Enzyme.configure({ adapter: new Adapter() });

describe("test UnitTest component", () => {
    test('test h5 content', () => {
        const wrapper = shallow(<UnitTest />);
        expect(wrapper.find('h5').text()).toContain('Testing App with Enzyme');
    })
    test('test h6 content', () => {
        const wrapper = shallow(<UnitTest/>);
        expect(wrapper.find('h6').text()).toContain('Explore UI')
    })
    test("test props", () => {
        const wrapper = shallow(<UnitTest name="Praveen Kumar" />)
        expect(wrapper.find('#props').text()).toBe("Welcome Praveen Kumar")
    })
    test("test initial value with state", () => {
        const wrapper = shallow(<UnitTest/>)
        expect(wrapper.find('#state_value').text()).toBe('0')
    })
    
    test("simulate the click events", () => {
        const wrapper = shallow(<UnitTest/>);
        wrapper.find('#increment').simulate('click');
        expect(wrapper.find('#state_value').text()).toBe('1');
    })
    
})
