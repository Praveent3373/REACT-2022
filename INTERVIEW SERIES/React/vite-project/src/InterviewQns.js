
// Qn 1: How can I clear the localstorage when user close react application window?
// sources:
// https://stackoverflow.com/questions/61426354/reactjs-using-localstorage-to-save-data-breaks-with-error-maximum-update-depth
// https://www.freecodecamp.org/news/state-management-with-react-hooks/

// Qn 2: generate otp component on button click and validate
// source:
// https://codesandbox.io/s/0y849kwoqv
// https://codesandbox.io/s/nuc7v
// https://codesandbox.io/s/1iy52

// Qn 3: Why should we not update the state directly?
// One should never update the state directly because of the following reasons:
// If you update it directly, calling the setState() afterward may just replace the update you made.
// When you directly update the state, it does not change this.state immediately. Instead, it creates a pending state transition, and accessing it after calling this method will only return the present value.
// You will lose control of the state across all components.


// Qn 4: How to add new Property using this.setState and setState without modifying prev one



// Qn 5: print only 10 posts and add diffrent color for odd and even indexes

export default function App() {
    const [name, setName] = useState([posts])
    return (
        <div className="App">
            {name.map((el, index) => {
            return <h4 style={{color: (index % 2 === 0)? 'red': 'green'}}>{el}</h4>
            }).slice(0, 10)}
        </div>
    );
}
