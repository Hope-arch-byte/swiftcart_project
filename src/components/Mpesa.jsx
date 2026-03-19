import axios from 'axios'
import React, { useState } from 'react'
import { useLocation } from 'react-router-dom'

const Mpesa = () => {

  const [loading,setLoading] = useState('')
  const [success,setSuccess] = useState('')
  const [error,setError] = useState("")

  const [phone,setPhone] = useState('')

  const {product} = useLocation().state || {}

  // A function to submit the data to the API
  const submit = async(e)=>{
    e.preventDefault()
     setLoading('Please wait as we process your payment')

     try {
      const data =new FormData()

      data.append('amount',product.product_cost)
      data.append('phone',phone)

      const response = await axios.post('http://hopegathoni.alwaysdata.net/api/mpesa_payment',data)

      setLoading('')

      setSuccess(response.message)
     } 
     catch (error) {
      setLoading('')

      setError(error.message)      
     }
  }  
  const image_url='http://hopegathoni.alwaysdata.net/static/images/'


  return (
    <div className='row justify-content-center'>
        <h1>Mpesa Payments <br />
          Lipa na Mpesa </h1>

          <p className='text-success'>{product.product_name}</p>
          <p className='text-secondary'>{product.product_description}</p>
          <p className='text-warning'>{product.product_cost}</p>
          <img src={image_url +product.product_photo} alt="cake" className='product_img mt-2'/>


        <div className='col-md-4'>

          <form action="" onSubmit={submit}>

            <p className='text-warning'>{loading}</p>
            <p className='text-success'>{success}</p>
            <p className='text-danger'>{error}</p>


             <input type="tel" 
             className='form-control' 
             placeholder='Enter Your Phone number, begin +254'
             required 
             value={phone}
             onChange={(e)=>setPhone(e.target.value)}/>
             
             <br />

             <input type="button" 
             className='btn btn-info w-100' 
             value="Make payment" />
          </form>

        </div>
    </div>
  )
}

export default Mpesa