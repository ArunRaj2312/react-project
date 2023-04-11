import React, { useState } from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import EmailIcon from '@mui/icons-material/Email';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import PhoneIcon from '@mui/icons-material/Phone';
import { Grid } from '@mui/material';
// import './unicDialog.scss'
import './DialogBox.scss'
import AlertDialogSlide from '../Success/Success';
export default function MaxWidthDialog() {
  const [open, setOpen] = React.useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
    const [call,callMe]=useState(false)
    const [userName,setusername]=useState('')
    const [userEmail,setEmail]=useState('')
    const [formvalid,setformvalid]=useState(false)
    const [userNumber,setNumber]=useState('')
    const handelForm =()=>{
        setformvalid(true);
        if(userName!=='' && userNumber!=='' && userEmail!==''){
            callMe(true)
        }
    }

  return (
    <React.Fragment>
      <Button variant="outlined" className='contact-button-1' onClick={handleClickOpen}>
          Contact Details
      </Button>
      <Dialog
        fullWidth={"50%"}
        maxWidth={"50%"}
        open={open}
        onClose={handleClose}
      >
        <DialogTitle>Fill out this one-time form</DialogTitle>
        <DialogContent className='dialog-form'>
        <Grid className="form-head">
                <input type={'text'} placeholder='YOUR NAME' onChange={(even)=>{
                    setusername(even.target.value);
                }}/>
                {formvalid ? (userName=== "" ? <p className="error">Please Enter your user name</p> :null) :null}
                <input type={'Email'} placeholder='Email' onChange={(even)=>{
                    setEmail(even.target.value);
                }}/>
                {formvalid ? (userEmail=== "" ? <p className="error" >Please Enter your user Email </p>:null) :null}
                <Grid className="form-select">
                    <select>
                        <option>IND +91</option>
                        <option>USA +0</option>
                        <option>UK +72</option>
                        <option>NES +44</option>
                    </select>
                    <input type={'number'} placeholder='Moblie Number' required maxlength={10} onChange={(even)=>{
                        setNumber(even.target.value);
                }}/>
                    {formvalid ? (userNumber=== "" ? <p className="error">Please Enter Moblie Number</p>:null) :null}
                    
                </Grid>
                <p className="form-text">I Agree to MagicBricks <span>Terms of use</span></p>
                <Button onClick={()=>{handelForm()}} className='contact-button-1'>Get Contact Details</Button>
                {call?
                    <>
                    <AlertDialogSlide />
                        <Grid className="call-me">
                            <a href="http//#"><Grid><PhoneIcon /></Grid></a>
                            <a href="http//#"><Grid><WhatsAppIcon /></Grid></a>
                            <a href="http//#"><Grid><EmailIcon /></Grid></a>
                        </Grid>
                        </>
                :null}
            </Grid>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Close</Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
}