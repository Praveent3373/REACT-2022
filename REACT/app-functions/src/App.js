import logo from './logo.svg';
import './App.css';
import UseState from './hooks/01.UseState';
import UseEffect from './hooks/02.UseEffect';
import UseRef from './hooks/03.UseRef';
import UseReducer from './hooks/04.UseReducer';
import UseCustom from './hooks/05.UseCustom';
import ReactMemo from './hooks/06.ReactMemo';
import UseCallback from './hooks/07.UseCallback';
import UseMemo from './hooks/08.UseMemo';
import ClickCounter from './hoc/ClickCounter';
import HoverCounter from './hoc/HoverCounter';
import ClassCounter from './hoc/class/ClassCounter';
import FnCounter from './hoc/FnCounter';
import {IndexErrorB } from './error-boundaries/IndexErrorB';
import Counter from './hooks/09.context/Counter';
import { Lifecycle } from './lifecycle/LifecycleMethods';
import { Form } from './forms/Form';
import { MultipleInputs } from './forms/MultipleInputs';
import { MultipleReturns } from './conditional-rendering/MultipleReturns';
import { ShortCircuit } from './conditional-rendering/ShortCircuit';
import { ShowHide } from './conditional-rendering/ShowHide';
import Index from './prop-types';
import RouterSetup from './react-router';
import Form1 from './formik-react/Form1';
import FormikForm from './formik-react/Formik';

function App() {
  return (
    <div className="App">
        <FormikForm/>
    </div>
  );
}

export default App;
