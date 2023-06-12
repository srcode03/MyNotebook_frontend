import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

export default function Login(props) {
  //we are making use of the useNavigate() hook
    const {showalert}=props
    let navigate=useNavigate();
    const [context,setcontext]=useState({email:"",password:""});
    const handleonchange=(e)=>{
        setcontext({...context,[e.target.name]:e.target.value})
    }
    const handleonclick=async(e)=>{
        e.preventDefault();
             const response=await fetch('http://localhost:5000/api/auth/login',{
            method:'POST',
            headers:{
            'Content-Type':'application/json'
            },
            body:JSON.stringify({email:context.email,password:context.password}),
        })
        const json=await response.json()
        
        if(json.success===false)
        {
          alert("Invalid Credentials")
          navigate('/login')
          
        }
        else{ 
          localStorage.setItem('token',json.authtoken)
          //once the authentication is done we will redirect him to the part where his notes are saved
          // showalert("You have been successfully logged in","success")
          alert("You have sucessfully logged in")
          navigate("/")
          
        }
    }
  return (
    <>
    <h2 className="mt-3">Login to Access Your Valuable Notes!!!</h2>
    <form onSubmit={onsubmit}>
    <div className="my-3">
      <label htmlFor="email" className="form-label">Email address</label>
      <input type="email" className="form-control" name="email" id="email" value={context.email} onChange={handleonchange} />
    </div>
    <div className="mb-3">
      <label htmlFor="password" className="form-label">Password</label>
      <input type="password" className="form-control" id="password" name="password" value={context.password} onChange={handleonchange} />
    </div>
    <button type="submit" className="btn btn-primary" value={context.password} onClick={handleonclick}>Submit</button>
  </form>
  </>
  )
}
