import logo from './logo.svg';
import './App.css';
import Todo from './components/todo/Todo';
import RangeCounterA from './components/counter/RangeCounterA'
import RangeCounterB from './components/counter/RangeCounterA'

function App() {
  return (
    <div className="App">
      {/* <Todo></Todo> */}
      {/* <RangeCounterA min={0} max={9} /> */}
      <RangeCounterB min={0} max={5} />
    </div>
  );
}

export default App;
