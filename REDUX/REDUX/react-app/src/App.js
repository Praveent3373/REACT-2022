import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import { Counter } from './counter/Counter';
import { Authentication } from './dummy-authen/Authentication';
import { CartContainer } from './shopping-cart/CartContainer';
import { MultipleReducers } from './mutiplereducers/MultipleReducers';

import { Header } from './async-actions/containers/Header';
import { ProductListing } from './async-actions/containers/ProductListing';
import { ProductComponent } from './async-actions/containers/ProductComponent';
import { ProductDetails } from './async-actions/containers/ProductDetails';
function App() {
  // return (
  //   <div className="App">
  //     <Header/>
  //   </div>
  // );
  
  return (
    <Router>
      <Header/>
      <Routes>
        <Route exact path='/' element = {<ProductListing/>} />
        <Route path='/product/:id' element = {<ProductDetails/>} />
        <Route>404 Not Found</Route>
      </Routes>
    </Router>
  )
}

export default App;
