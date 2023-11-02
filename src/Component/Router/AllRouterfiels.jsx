import React from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './Home'
import About from './About'
import Contact from './Contact'
import Signfile from './Signfile';

function AllRouterfiels() {
  return (
  
    <Router>
      <Routes>
        <Route exact path="/" element={<Home />}></Route>
        {/* <Route exact path="/about" element={<About />}></Route>
        <Route exact path="/contact" element={<Contact />}></Route> */}
        <Route exact path="/Login" element={<Signfile />}></Route>
      </Routes>
    </Router>
  
  )
}

export default AllRouterfiels
