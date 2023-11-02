// Ques 3  Impliment checkbox [MUI] with functionality using state variables for checkbox true/false. Display selected checkbox value in Typography “Hey ! You have selected {selected value} value.


import React, {useState}from 'react'
import "./task.css"
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Typography from '@mui/material/Typography';



function Task5() {

    const [labeled, setLabeled] = useState(false);
    const [req, setReq] = useState(false);
    const [dis, setDis] = useState(false);

    const changeLab = l => {
        setLabeled(current => !current);
    };
   
    const changeReq = r => {
        setReq(current => !current);
    }
    const changedis = () => {
        setDis(current => !current);
    }

  return (
    <div className='task'>
      <FormGroup>
      <FormControlLabel onChange={changeLab} control={<Checkbox />} label="Label" />
      <FormControlLabel onChange={changeReq} control={<Checkbox />} label="Required" />
      <FormControlLabel onChange={changedis} control={<Checkbox />} label="Disabled" />
    </FormGroup>
    {labeled && <Typography>Label worked</Typography>}
    {req && <Typography>Required worked</Typography>}
    {dis && <Typography>Disabled worked</Typography>}
    </div>
  )
}

export default Task5
