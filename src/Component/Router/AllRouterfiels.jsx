import React from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './Home'
import Signfile from './Signfile';

function AllRouterfiels() {
  return (
  
    <Router>
      <Routes>
        <Route path="/NetflixClone" element={<Home />}></Route>
        <Route path="/Login" element={<Signfile />}></Route>
      </Routes>
    </Router>
  
  )
}

export default AllRouterfiels
