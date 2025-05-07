import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Start from './Components/Start';
import Home from './Components/Home';
import About from './Components/About';
import Contact from './Components/Contact';


const App = () => {
  return (
    <Router>
      {/* <Home /> */}
      <Routes>
        <Route path='/' element={<Start />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
};

export default App;
