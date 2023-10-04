import { lazy, Suspense, useState } from "react"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Navigation from "./Navigation"
import About from "./pages/About"
import Contact from "./pages/Contact"
import Error from "./pages/Error"
import Home from "./pages/Home"
import People from "./pages/People"
import Person from "./pages/Person"
import Services from "./pages/Services"
import Dashboard from "./protected/Dashboard"
import Login from "./protected/Login"
import ProtectedRoute from "./protected/ProtectedRoute"

const LazyServices = lazy(() => import('./pages/Services'))

export const RoutingIndex = () => {
    const [user, setuser] = useState('');
    console.log(user);
    return (
        <BrowserRouter>
            <Navigation/>
            <div style={{border: '1px solid', padding: '20px', textAlign: 'center'}}>
                <Routes>
                    <Route path="/" element = {<Home/>} />
                    <Route path="/about" element = {<About/>} />
                    <Route path="/contact" element = {<Contact/>} />
                    <Route path="/services" element = {<Suspense fallback ="Loading..."><LazyServices/></Suspense>} />
                    <Route path="/people/:name" element = {<People/>} />
                    <Route path="/login" element = {<Login setUser = {setuser} />}  />
                    <Route path="/dashboard" element = {<ProtectedRoute >
                        <Dashboard user={user}/>
                    </ProtectedRoute>} />
                    <Route path="*" element = {<Error/>} />
                </Routes>
            </div>
            
        </BrowserRouter>
    )
}