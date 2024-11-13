import React from 'react';
import Home from './Home'; // Import Home component
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Component/Navbar';
import Footer from './Component/Footer';
import Contact from './Contact';
import SignUp from './Signup';
import Signin from './Signin';
import About from './pages/About';


const App = () => {
    return (
        <Router>
            <div className="App">
                <Navbar /> 

                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/contact" element={<Contact/>} /> 
                    <Route path="/about" element={<About/>} /> 
                   
                    <Route path="/signup" element={<SignUp/>} /> 
                    <Route path="/signin" element={<Signin/>} /> 
                    <Route path="/footer" element={<Footer/>} /> 
                    
                    
                </Routes>
            </div>
        </Router>
    );
};

export default App;
