import { fireEvent, render, screen } from '@testing-library/react';
import App from './App';
import {mount} from 'enzyme'
import Todo from './components/todo/Todo';
import TodoItem from './components/todo/TodoItem';

// jest
// describe("<App/>", () =>{
//   const app = mount(<App/>)
//   test("Render without crashing", () => {
//     expect(app.find('.heading').text()).toEqual("TO DO APPLICATION");
//   })
//   test("Check any default values", () => {
//     expect(app.find('.list-item').length).toBe(2)
//   })
//   test("Has an input field", () => {
//     expect(app.find('input').length).toBe(1)
//   })
//   test("Has an add button", () => {
//     expect(app.find('.add-btn').length).toBe(1)
//   })
// })

// describe("Adding Items", () => {
//   const app = mount(<App/>)
//   // afterAll(() => {
//   //   app.find('.deleteItem').simulate("click")
//   // })
//   window.alert = jest.fn();
//   test("when the button is clicked, if the input is empty, prevent item from being added", ()=>{
//     app.find('.add-btn').simulate("click");
//     expect(app.find('.list-item').length).toBe(2);
//   })
//   test("when the button is clicked, if the input is empty, prevent item from being added", ()=> {
//     app.find('.add-btn').simulate("click");
//     expect(window.alert).toHaveBeenCalled();
//   })
// })

// describe("Delating Items", () => {
//   const app = mount(<App/>);
//   test("when the delete button is clicked for the first todo item, it removes the entire item", ()=> {
//     app.find('.deleteItem').first().simulate("click")
//     expect(app.find('.list-item').length).toBe(1)
//   })
//   test("first item deleted, now first item should be return to office", () => {
//     expect(app.find(".item-text").first().text()).toEqual("return to office")
//   })
// })


// describe("<TodoItem/>", ()=> {
//   const item = {entry: "Clean the room"};
//   const toDoitem = mount(<TodoItem {...item} />)
//   test("renders the text from the prop", () => {
//     expect(toDoitem.find('h5').text()).toEqual(item.entry)
//   })
//   test("renders the delete button", ()=> {
//     expect(toDoitem.find('.deleteItem').text()).toBe("X Delete")
//   })
// })


// Testing Library
describe("<App/>", () =>{
  const {getByText} = render(<App/>)
  test("Render without crashing", () => {
    expect(getByText('TO DO APPLICATION')).toBeInTheDocument()
  })
//   test("Has input field", () => {
//     const {getByTestId} = render(<App/>)
//     expect(getByTestId('input')).toBeInTheDocument()
//   })
//   test("Check Add button text", () =>{
//     const {getByTestId} = render(<App/>)
//     expect(getByTestId('button').textContent).toBe('Add Task');
//   })
})

// describe("Delating items", ()=> {
//   test("when the delete button is clicked for the first todo item, it removes the entire item",()=> {
//     const {queryAllByTestId} = render(<App/>);
//     expect(queryAllByTestId("list-item").length).toBe(2)
//     fireEvent.click(queryAllByTestId('deleteBtn')[0]);
//     expect(queryAllByTestId("list-item").length).toBe(1)
//   })
//   test("now the first todo item should be return to office", ()=> {
//     const {queryAllByTestId, queryByTestId} = render(<App/>);
//     fireEvent.click(queryAllByTestId('deleteBtn')[0]);
//     expect(queryByTestId('item-text').textContent).toBe('return to office')
//   })
// })

// describe("<Todo Item />", ()=> {
//   const item = {entry: 'Clean the room'}
//   test("render the text from the prop", () => {
//     const {getByTestId} = render(<TodoItem {...item} />)
//     expect(getByTestId('item-text').textContent).toBe(item.entry);
//   })
//   test("render a delete button", () => {
//     const {getByTestId} = render(<TodoItem {...item} />)
//     expect(getByTestId('deleteBtn').textContent).toBe('X Delete')
//   })
// })