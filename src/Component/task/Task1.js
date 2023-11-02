import React , {useState} from 'react'
import "./task.css"
import "./../Css file/Formpage.css"
import TextField from '@mui/material/TextField';

function Task1() {
    const [next, setNext] = useState("")
    const [final, setFinal] = useState("")
    const [unhide, setUnhide] = useState(false)
    const [hello , setHello] = useState("");
    const [display, setDisplay]= useState(false)
    const [para, setPara]= useState("")

    const changename = (e) => {
        setNext(e.target.value)
    }
    const changelname = (l) => {
        setFinal(l.target.value)
    }
    const onSubmit = () =>{
        setUnhide(true)
    }
    const Final = () =>{
        setHello('Hello')
        setDisplay(true)
        setPara('Thank u For teaching us React-js')
    }


  return (
    <div className='task'>
      <div >
        {unhide===true? <>
      <TextField id="outlined-basic" label="2-name"onChange={(l)=>changelname(l)} />
      <button style={{margin : "12px", borderRadius:"20px"}} onClick={Final}>Submit</button>
      </>:<> <TextField id="outlined-basic" label="1-name" onChange={(e)=>changename(e)}/>
       <button style={{margin : "12px", borderRadius:"20px"}} onClick={onSubmit}>Next</button></>}
       </div>
      
      {display&&  <h1> {`${hello} ${next} & ${final}`} <br/> {`${para}`}</h1>}
    </div>
  )
}

export default Task1
