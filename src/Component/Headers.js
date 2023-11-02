import React, { useState } from 'react'
import "./Css file/Formpage.css"
import Card from '@mui/material/Card';
import CardDesign from "./CardDesign"


export default function Headers(prop){

  const menu = ["Home", "About", "Contact us"];
 
  return (
    <nav className=" navbar navbar-expand-lg bg-body-tertiary">
    <div className="body-nav container-fluid">
      <a className="navbar-brand" href="#">
        {prop.title}
      </a>
      {/* <button>
      <span className="navbar-toggler-icon">Fuckoff</span>
      </button> */}
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        
      {/* <table><th><tr>{menu.map((nav)=><td><button >{nav}</button></td>)}</tr></th></table> */}
      {/* <CardDesign / > */}
        {/* <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <a className="nav-link active" href="#">
              Home
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link active" href="#">
              About
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link  active">
              yourself
            </a>
          </li>
        </ul> */}
        <form className="d-flex" role="search">
         <button className="btn btn-outline-success" type="submit">
            Log-in
          </button>
          <button className="btn btn-outline-success" type="submit">
            Sinup
          </button>
        </form>
      </div>
    </div>
  </nav>

  )
}
