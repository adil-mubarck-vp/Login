import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './Login.css'
import {useNavigate} from "react-router-dom"




function Login() {
  // const text=""
  // const paswd=""
 const [text,setText]=useState("")
 const [paswd,setPaswd]=useState("") 
 const navigate = useNavigate();

 function helo(){
  if(text===""){
    alert("enter username")
  }else if(paswd===""){
    alert("enter pasword")
  }else{
    console.log("hi");
    navigate("/home")
  }
 }
    

  return (

    <div className='login'>
      <div className="log-d">
        <h1>Login</h1>
        <input type="text" placeholder='username' value={text} onChange={(e)=>setText(e.target.value)}/>
        <input type="password" placeholder='password'value={paswd} onChange={(e)=>setPaswd(e.target.value)}/>
        

        <div className='btn-log'>
         
          <button className='btn' onClick={helo}>sign</button>
          {/* </Link> */}
        
        </div>
      </div>
     
    </div>

 
  )
}

export default Login