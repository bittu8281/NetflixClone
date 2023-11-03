import React from 'react'
import "./css.css"
import { Link } from 'react-router-dom'

function Homepage() {
  return (
    <div >
     <div className="Task">
        <Link to="/Login"><button className='bttttn' sx = {{fontSize : "10px"}}>Sign in</button></Link>   
      </div>
    </div>
    
  )
}

export default Homepage
