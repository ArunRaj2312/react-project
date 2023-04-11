import React,{useState} from 'react'
import './Signup.scss'
function Singup() {
    const [user,userInput]=useState('')
    const [phone,phoneInput]=useState('')
    const [mail,mailInput]=useState('')
    const [pass,passInput]=useState('')
    const [conpass,conpassInput]=useState('')
    const [validationFlag,setValidation]=useState(false)
    const handleInput=(e)=>{
        if(e.target.name==='user'){
            userInput(e.target.value)
        }
        else if(e.target.name==='phone'){
            phoneInput(e.target.value)
        }
        else if(e.target.name==='mail'){
            mailInput(e.target.value)
        }
        else if(e.target.name==='password'){
            passInput(e.target.value)
        }
        else if(e.target.name==='conpassword'){
            conpassInput(e.target.value)
        }
    }
    const submitInput=(e)=>{
        e.preventDefault();
        setValidation(true)
    }
    var obj={};
    obj={userName:user,password:conpass}
    var magic=[];
    magic[magic.length]=obj;
    localStorage.setItem("magic",JSON.stringify(magic))
    // console.log("get",localStorage.getItem(JSON.parse(magic)));
  return (
    <div>
        <h1>Magicbricks</h1>
        <div className='log-box'>
            <div className='head'>
                <p>Sign Up to Magicbricks</p>
            </div>
            <div className='log-form'>
                <div>
                    <input type="text" name="user" placeholder="User Name" value={user} onChange={(e)=>handleInput(e)}></input>
                    <p>{validationFlag? (user===''? 'fill this box':null):null}</p>
                </div>
                <div>
                    <input type="text" name="phone" placeholder="Phone Number" value={phone} onChange={(e)=>handleInput(e)}></input>
                    <p>{validationFlag? (phone===''? 'fill this box':null):null}</p>
                </div>
                <div>
                    <input type="email" name="mail" placeholder="Gmail" value={mail} onChange={(e)=>handleInput(e)}></input>
                    <p>{validationFlag? (mail===''? 'fill this box':null):null}</p>
                </div>
                <div>
                    <input type="password" name="password" placeholder="Password" value={pass} onChange={(e)=>handleInput(e)}></input>
                    <p>{validationFlag? (pass===''? 'fill this box':null):null}</p>
                </div>
                <div>
                    <input type="password" name="conpassword" placeholder="Confirm Password" value={conpass} onChange={(e)=>handleInput(e)}></input>
                    <p>{validationFlag? (conpass!==pass? 'correct password':null):null}</p>
                </div>
                <div>
                    <button onClick={(e)=>{submitInput(e)}}>Sign Up</button>
                </div>
            </div>
            <div className='next'>
                <a href="index.html">Sign in for Magicbricks</a>
            </div>
        </div>
    </div>
  )
}

export default Singup