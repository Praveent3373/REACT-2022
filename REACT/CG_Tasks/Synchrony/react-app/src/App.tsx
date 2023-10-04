import CounterA from "./task1/hoc/CounterA";
import { HooksIndex } from "./task1/hooks/HooksIndex";
import Task1Index from "./task1/Task1Index";
import Task2Index from "./task2/Task2Index";

function App() {
  const a  ="<h3>Test</h3>";
 


  return (
    <div className="App">
        <h1 style={{textAlign: 'center'}}>React with Typescript </h1> <br />
      {a}
      <span dangerouslySetInnerHTML={{__html: a}} />
        {/* <Task1Index/> */}
        <Task2Index/>
    </div>
  );
}

export default App;
