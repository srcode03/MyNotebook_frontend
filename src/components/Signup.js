import React from 'react'
import {useState} from 'react'
import { useNavigate } from 'react-router-dom'

export default function Signup(props) {
  const {showalert}=props
  const [context,setcontext]=useState({name:"",email:"",password:"",cpassword:""})
    const handleonchange=async(e)=>{
    setcontext({...context,[e.target.name]:e.target.value})
  }
  const navigate=useNavigate();
  const handleonclick=async(e)=>{
    e.preventDefault()
    const response=await fetch('http://mynotebook-8i3j.onrender.com/api/auth/createuser',
    {
      method:'POST',
      headers:{
      'Content-Type':'application/json'
      },
      body:JSON.stringify({name:context.name,email:context.email,password:context.password}),
    });
    const json=await response.json()
    if(json.success===true)
    {
      localStorage.setItem('token',json.authtoken)
      
      navigate('/')
      // showalert('You have successfully signed in',"success")
      alert("You have successfully signed in")
    }
    else if(json.success===false){
      // showalert("Sorry a user with the same email already exists","danger")
      alert("Sorry a user with the same credentials already exists")
    }
  }
  return (
    <>
    <h2 className="mt-3">Signup to use INotebook!!!</h2>
    <div className="my-3">
      <label htmlFor="name" className="form-label">Name:</label>
      <input type="text" className="form-control" id="name" name="name" onChange={handleonchange}/>
    </div>
    <div className="mb-3">
      <label htmlFor="email" className="form-label">Email address:</label>
      <input type="email" className="form-control" id="email" name="email"onChange={handleonchange}/>
    </div>
    <div className="mb-3">
      <label htmlFor="password" className="form-label">Password(must be atleast 5 characters):</label>
      <input type="password" className="form-control" id="password" name="password" onChange={handleonchange}/>
    </div>
    <div className="mb-3">
      <label htmlFor="cpassword" className="form-label">Confirm Password:</label>
      <input type="password" className="form-control" id="cpassword" name="cpassword" onChange={handleonchange}/>
    </div>
    <button type="submit" className="btn btn-primary" onClick={handleonclick}>Submit</button>
  </>
  )
}
