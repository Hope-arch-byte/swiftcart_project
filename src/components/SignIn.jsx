import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from "axios"

const SignIn = () => {

  const[email,setEmail]=useState("")
  const[password,setPassword]=useState("")

  const[loading,setLoading]=useState("")
  const[success,setSuccess]=useState("")
  const[error,setError]=useState("")

  // the hook used to redirect the user is useNavigate

  const navigate=useNavigate();

  const submit=async(e)=>{

    e.preventDefault()

    setLoading('Please wait...')      

    try {
      const data=new FormData()

      data.append('email',email)
      data.append('password',password)
      
      // post the above data to the backend API
      const response=await axios.post('http://hopegathoni.alwaysdata.net/api/signin',data);

      setLoading(''); 

      // check if the response has user item

      if (response.data.user){
        // if the user is found, store user details in local storage(browser). setItem is used to save the user details. stringify is used to convert the user details from an object to string. 
        localStorage.setItem('user',JSON.stringify(response.data.user));
        setSuccess(response.data.message);

        // redirect to get products component
        setTimeout(()=>{          
          navigate("/");
        },2000)
      }
      else{
        // if the user is not found,an error message is displayed
        setError(response.data.message);
      }

      // for clearing the frontend form after signing in successfully
      setEmail('')
      setPassword('')
    } 
    catch (error) {
      setLoading('');

      setError(error.data.message)

    }
  }

  return (
    
    <section className='row justify-content-center mt-5'>
      <div className='card shadow col-md-6' >        
        <h1 className='p-3'>Sign In</h1> 

        <form action="" onSubmit={submit}>
          <p className='text-warning'>{loading}</p>
          <p className='text-success'>{success}</p>
          <p className='text-danger'>{error}</p>
          
          <input 
          type="email" 
          placeholder='Email' 
          value={email}  
          className='form-control'
          required 
          onChange={(e)=>setEmail(e.target.value)} />
          <br />

          <input 
          type="password" 
          placeholder='Password' 
          value={password} 
          className='form-control' 
          required 
          onChange={(e)=>setPassword(e.target.value)}/>
          <br />

          <input 
          type="submit" 
          value={'Sign In'} 
          className='text-white w-100 btn bg-info'/>

          <p>Don't have an account?<Link to="/signup"> Sign Up</Link></p>
        </form>

      </div>
    </section>
  )
}

export default SignIn