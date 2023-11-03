import React, { Fragment, useState } from 'react'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import './/css.css'
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Box from '@mui/material/Box';
import Popper from '@mui/material/Popper';
import Typography from '@mui/material/Typography';
import Fade from '@mui/material/Fade';
import Paper from '@mui/material/Paper';

function Signfile() {
 const [unhide, setUnhide] = useState(false)
 
  return (
    <Fragment >
   <div className="BG-img">    
    <div className='Spage'>
      <h1 className='h1sss'>Sign In</h1>
      <TextField  className='text' id="outlined-basic" label="Email or Phone number"/>
      <TextField className='text' type='password' label="Password" />
      <button className='bttttn btn_sign' sx={{padding : "16px", margin:"24px 0 12px"}}>
        Sign In
      </button>
      <div>
      <FormControlLabel control={<Checkbox defaultChecked />} label="Remember me" />
      <Button href="https://www.netflix.com/in/LoginHelp">Need help?</Button>
      </div>
      
      <div className='New-sign'><h4>New to NetFLix?<Button href='/NetflixClone'>Sign up now</Button></h4>      
      <p sx={{fontSize: "0.8em"}}>This page is protected by Google reCAPTCHA to ensure you're not a bot.
      { unhide ? <Typography sx={{fontSize: "0.8em"}}>The information collected by Google reCAPTCHA is subject to the Google<a href='https://policies.google.com/privacy'> Privacy Policy</a> and <a href='https://policies.google.com/terms'>Terms of Service</a>, and is used for providing, maintaining, and improving the reCAPTCHA service and for general security purposes (it is not used for personalised advertising by Google).</Typography>
:<Button onClick={() => setUnhide(true)}>Learn more.</Button>}</p>
      </div>
     </div>
     </div>  
    </Fragment>
  )
}

export default Signfile
