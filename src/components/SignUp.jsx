import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import axios from "axios";

const SignUp = () => {

  // initializing hooks
  const[username,setUsername]=useState("")
  const[email,setEmail]=useState("")
  const[phone,setPhone]=useState("")
  const[password,setPassword]=useState("")

  // initializing hooks for loading ,success and error

  const[loading,setLoading]=useState("")
  const[success,setSuccess]=useState("")
  const[error,setError]=useState("")

  // function that sends data to the database

  const submit=async(e)=>{

    e.preventDefault()
    setLoading('please wait...')

    // sending data to the database
    try {

      const data=new FormData()

    data.append('username',username)
    data.append('email',email)
    data.append('phone',phone)
    data.append('password',password)

    // calling the APIs
    const response=await axios.post('http://hopegathoni.alwaysdata.net/api/signup',data)

    setLoading('')

    setSuccess(response.data.message)
    
    // used to clear the data in the frontend form
    setUsername('')
    setEmail('')
    setPassword('')
    setPhone('')

    } 
    catch (error) {
      setLoading(false)

      setError(error.message)
      
    }

  }

  return (
    <div className='row justify-content-center mt-3'>
      <div className="card shadow col-md-6">
        <h1>Sign Up</h1>

        <form action="" onSubmit={submit}>

          <p className='text-warning'>{loading}</p>
          <p className='text-success'>{success}</p>
          <p className='text-danger'>{error}</p>

        {/* {username} */}
        <input 
        type="text" 
        placeholder='Enter Your Username' 
        className='form-control'
        required 
        value={username} 
        onChange={(e)=>setUsername(e.target.value)}/>
        <br />

        {/* {email} */}
        <input 
        type="email" 
        placeholder='Enter Your Email' 
        className='form-control'
        required 
        value={email}
        onChange={(e)=>setEmail(e.target.value)}/>
        <br />

        {/* {phone} */}
        <input 
        type="tel" 
        placeholder='Enter Your Phone Number' 
        className='form-control'
        required 
        value={phone}
        onChange={(e)=>setPhone(e.target.value)}/>
        <br />

        {/* {password} */}
        <input 
        type="password" 
        placeholder='Enter Your Password' 
        className='form-control'
        required 
        value={password}
        onChange={(e)=>setPassword(e.target.value)}/>
        <br /><br />


        <input 
        type="submit" 
        value={'Sign Up'} 
        className='w-100 form-control bg-info text-white'
        />

        <p>Already have an account?<Link to='/signin'>Sign In</Link></p>
      </form>

      </div>

    </div>
  )
}

export default SignUp