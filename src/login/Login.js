import React,{useState} from 'react'

function Login() {
    const [userName,checkUser]=useState('')
    const [password,checkPassword]=useState('')
    const [validation,checkValidation]=useState(false)
    const checkInput=(e)=>{
        if(e.target.name==='user'){
            checkUser(e.target.value)
        }
        else if(e.target.name==='password'){
            checkPassword(e.target.value)
        }
    }
    const submit=(e)=>{
        e.preventDefault()
        checkValidation(true)
    }
  return (
    <div>
        <h1>Magicbricks</h1>
        <div className='log-box'>
            <div className='head'>
                <p>Sign in to Magicbricks</p>
            </div>
            <div className='log-form'>
                <div>
                    <input type="text" name="user" placeholder="User Name" value={userName} onChange={(e)=>checkInput(e)}></input>
                    <p>{validation? (userName===''? 'fill this box':null):null}</p>
                </div>
                <div>
                    <input type="password" name="password" placeholder="Password" value={password} onChange={(e)=>checkInput(e)}></input>
                    <p>{validation? (password===''? 'fill this box':null):null}</p>
                </div>
                <div>
                    <button onClick={(e)=>submit(e)}>Sign in</button>
                </div>
            </div>
            <div className='next'>
                <a href="index.html">Sign up for Magicbricks</a>
            </div>
        </div>
    </div>
  )
}

export default Login