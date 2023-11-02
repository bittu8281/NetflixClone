// Ques 2. Create one state variable of object type. Initial value will be 
// { 
// “name”:”abc”,
// “age”:23,
// “gender”:”female”
// }
// In useEffect update this state with new value 
// {
// “name”: “abc”,
// “age”: 25,
// “gender”:”female”
// }


import React, { useEffect, useState } from 'react'



function Task4() {
 
    const [value, setValue] = useState({'name':'Vidhi','age':'23','gender':'male'})
    
    useEffect(()=>{
        // console.log("Hello Vidhi Can u tell me logic plzzzzzzzz")
        let vidhi = {
            ...value, 
            "age":'25',"mob":9876543211,'name':"shristi" , 'gender': 'Female'
        }
        console.log(vidhi)
    })
 
    return (
    <div>
        hello
    </div>
  )
}

export default Task4
