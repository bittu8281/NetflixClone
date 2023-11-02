// import React, { useState } from 'react'
// import SentimentVeryDissatisfiedIcon from '@mui/icons-material/SentimentVeryDissatisfied';
// import "./Css file/Formpage.css"
// import TextField from '@mui/material/TextField';
// import Card from '@mui/material/Card';
// import CardActions from '@mui/material/CardActions';
// import CardContent from '@mui/material/CardContent';
// import Button from '@mui/material/Button';
// import Typography from '@mui/material/Typography';


// import CardDesign from "./CardDesign"


// export default function Demo() {
//     const [next, setNext] = useState("")
//     const [final, setFinal] = useState("")
//     const [unhide, setUnhide] = useState(false)
//     const [hello , setHello] = useState("");
//     const [display, setDisplay]= useState(false)
//     const [para, setPara]= useState("")
//     const [menu, setMenu]= useState(["About", "Contact us", "Home"])
//     const [cond, setCond] = useState("")

//     const navChange = (nav) =>{
//         setCond(nav)
//         // console.log(cond)
//     }

    
//     const changename = (e) => {
//         setNext(e.target.value)
//     }
//     const changelname = (l) => {
//         setFinal(l.target.value)
//     }
    
//   return (
//     <div className='task'>
//             <h1>Click any button to show </h1>  
//       <div className='menuu'>{menu?.map((nav)=><Button onClick={()=>navChange(nav)} >{nav}</Button>)}</div>
      

      
      // {/* {cond==="About" ? <CardDesign name = "About"/> :cond==="Contact us" ? <CardDesign name = "Contact us"/> :cond==="Home" ? <CardDesign name = "Home"/> :""} */}
//      <CardDesign name = {cond}/>
      
//       <div className=''>
//         {unhide===true? <>
//       <TextField id="outlined-basic" label="2-name"onChange={(l)=>changelname(l)} />
//       {/* <button onClick={Final}>Submit</button> */}
//       </>:<> <TextField id="outlined-basic" label="1-name" onChange={(e)=>changename(e)}/>
//        {/* <button onClick={onSubmit}>Next</button></>} */}
//        </div>
      
//       {display&&  <h1> {`${hello} ${next} & ${final}`} <br/> {`${para}`}</h1>}
     
//       {/* <h1>{sorry} {sorry!=""?<SentimentVeryDissatisfiedIcon />:null}</h1>  */}


//       {/* <CardDesign /> */}
    
    
//     </div>
//   )
// }

