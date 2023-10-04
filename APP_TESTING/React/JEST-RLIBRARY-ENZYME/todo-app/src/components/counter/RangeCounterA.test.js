import { fireEvent, render } from "@testing-library/react"
import { mount } from "enzyme"
import RangeCounterA from "./RangeCounterA"

// React Testing Library
// describe('RangeCouterA', () => {
//         test("when increment counter is allowed, Update the counter value", async () => {
//             const {getByTestId, getByText} = render(<RangeCounterA min={2} />)
//             fireEvent.click(getByText('+'));
//             expect(getByTestId('counter-value').textContent).toBe('3');
//         })
//         test("display the alert when the limit has reached", () => {
//             const {getByText} = render(<RangeCounterA min = {0} max={1} />)
//             fireEvent.click(getByText('+'))
//             expect(getByText('Range limit has Reached!')).toBeVisible();
//         })
// })

// Testing with Enzyme

describe('RangeCounter B', ()=> {
    let counter;
    beforeEach(() => {
        counter = mount(<RangeCounterA/>)
    })
    test("does not show range reached alert on initial load", ()=> {
        expect(counter.find('.rangeCounter_alert')).toHaveLength(0);
    })
    test("display alert when limit has reached", () => {
        counter = mount(<RangeCounterA min={0} max={1} />)
        counter.instance().incrementCounter();
        counter.update();
        const alert = counter.find('.rangeCounter_alert');
        expect(alert.text()).toBe('Range limit has Reached!');
    })
    // test("when increment is allowed show update counter values correctly", ()=> {
    //     counter.instance().incrementCounter();
    //     expect(counter.state().count).toEqual(1);
    //     expect(counter.state().hasEdit).toEqual(true);
    // })
    // test("when limit has reached dont allow dont upate value", () => {
    //     const instance = counter.instance();
    //     instance.setState({count:10});
    //     instance.incrementCounter();
    //     expect(counter.state().count).toEqual(10);
    //     expect(counter.state().hasEdit).toEqual(true);
    // })
    
})