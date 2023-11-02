import React, { useState , useEffect} from "react";
import "./Css file/Formpage.css"
import Popup from "./Popup";
export default function Formpage(props) {
    const [hello , setHello] = useState("first");
    const [para , setPara] = useState("");
    const[Names , setName] = useState("");
    const[song , setSong] = useState("");
    const [age , setAge]= useState("");

    
     useEffect(()=>{
      
console.log("useEffect")
 demo()
     },[hello])
    
        // function handleSubmit(e) {
        //     e.preventDefault();
        //     props.getDate(Name)
        // }

        // const inputevent = (Event) =>{
        //     console.log(Event.target.value)
        //     // setName(Event.target.value)
        // }
        const demo =()=>{
          setHello('third')
        }
        const onSubmit = () =>{ 
          // console.log('Okh')
            setHello('second')
            setPara('Welcome to react js')
            setName('Fuckoff')
            setAge('u r in')
        }
        
        const changename = (e) =>{
          setName(e.target.value)
          console.log(e.target.value);
        } 
        // const changesong = (e) =>{
        //   setSong(e.target.value)
        //   console.log(e.target.value);
        // } 
        
        // const btn=()=>{
        //   // console.log("UseState2")
        //   setCount(count+1)
        //   // console.log(count)
        // }
  return (
    <span className="Forms">
      <form className="formin" >
        <h1>Enter your {Names} </h1>
       
        <label >
          Name:           
          <input type="text" onChange={(e)=>changename(e)} style={{marginLeft:'5px'}}/>
        </label>

        
        {/* <br/> */}
        <button onClick={onSubmit} className="btn">Submit</button>
        <Popup />
      
      </form>  

<h2> {hello}   <br/>{para}</h2>     

    {/* <h1>Enter song Name</h1>
    <input type="text" onChange={(e)=>changesong(e)} style={{marginLeft:'5px'}}/>
    <button onClick={onSubmit} className="btn">Submit</button> */}

    </span>
  );
}
// }