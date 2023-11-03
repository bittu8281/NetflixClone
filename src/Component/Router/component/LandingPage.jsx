import React from 'react'
import "./../css.css"
import Homepage from './../Homepage'
import TextField from '@mui/material/TextField';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import { Fragment } from 'react';

function LandingPage() {
  return (
    <Fragment>
      <div className='Home_page'>
        <Homepage />
        <div className='Home_Con'>
         <h1 style={{fontSize: '3em', fontWeight: "900" }}>Laughter. Tears. Thrills. Find it all on Netflix.</h1>
         <h2 style={{color: "Yellow", border : "2px solid red"}}>Note : This is a Clone Page</h2>
         <p style={{fontSize: '1.52em', fontWeight: "400"  }}>Endless entertainment starts at just ₹ 149. Cancel anytime.</p>
         <p style={{fontSize: '1.52em', fontWeight: "400"  }}>Ready to watch? Enter your email to create or restart your membership.</p>
         <div>
         <TextField  className='text_H' id="outlined-basic" label="Email Address"/>
         <button className='bttttn' >Get Started<KeyboardArrowRightIcon/></button>
         </div>
        </div>
      </div>
    </Fragment>
  )
}

export default LandingPage
