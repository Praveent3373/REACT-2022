import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'

import Navbar from './Navbar';
import Home from './Home';
import About from './About';
import People from './People';
import Error from './Error';
import { Person } from './Person';
const RouterSetup = () => {
    return (
        <Router>
            <Navbar/>
            <Routes>
                <Route exact path="/" element={<Home/>} />  
                <Route path="/about" element={<About/>} />  
                <Route path="/people" element={<People/>} />  
                <Route path="/person/:id" element={<Person/>} />  
                <Route path='*' element={<Error/>} />  
            </Routes>
        </Router>
    )
}

export default RouterSetup;