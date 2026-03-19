import React, { use, useState } from 'react'
import axios from 'axios'

const AddProducts = () => {
  const [product_name,setproduct_name]=useState('')
  const [product_description,setproduct_description]=useState('')
  const [product_cost,setproduct_cost]=useState('')
  const [product_photo,setproduct_photo]=useState('')
  
  const [loading,setLoading]=useState('')
  const [success,setSuccess]=useState('')
  const [error,setError]=useState('')

  const submit = async(e)=>{

    e.preventDefault()

    setLoading('Please wait...')

    try {
      // FormData below is the form data from insomnia 
      const data=new FormData()
      
      // whatever is in quotes is what was written in insomnia as the names
      data.append('product_name',product_name)
      data.append('product_description',product_description)
      data.append('product_cost',product_cost)
      data.append('product_photo',product_photo)

      const response=await axios.post('http://hopegathoni.alwaysdata.net/api/addproducts',data)

      setLoading('')
      
      setSuccess(response.data.message)

      // below is used to clear all the data in the UI form.
      setproduct_name('')
      setproduct_description('')
      setproduct_cost('')
      setproduct_photo('')


    } 
    catch (error) {
      setLoading('')

      setError(error.message)
    }
  }
  

  return (
    <div className='row justify-content-center mt-3'>
      <div className='col-md-6 card shadow'>
        
        <h1 className='pt-2'>Upload Products</h1>

        <form action="" onSubmit={submit}>
          <p className='text-warning'>{loading}</p>
          <p className='text-success'>{success}</p>
          <p className='text-danger'>{error}</p>

          <input type="text" 
          placeholder='Enter Product Name' 
          className='form-control' 
          required 
          value={product_name}
          onChange={(e)=>setproduct_name(e.target.value)}
          />
          <br />

          <textarea name="" id="" 
          placeholder='Describe your Product'
          className='form-control'
          required
          value={product_description}
          onChange={(e)=>setproduct_description(e.target.value)}
          ></textarea>
          <br />

          <input type="text" 
          placeholder='Enter Product Cost' 
          className='form-control'
          required
          value={product_cost}
          onChange={(e)=>setproduct_cost(e.target.value)}/>
          <br />

          <label htmlFor=""><b>Upload product photo</b></label>
          <br />
          <input type="file" 
          className='form-control'
          // accept used to specify the required input type 
          accept='image/*'
          // .files is used because the input type is a file and an index is used to access the first photo.
          onChange={(e)=>setproduct_photo(e.target.files[0])}
          required/>
          <br />

          <input type="submit"
          value={'Upload products'}
          className='btn bg-info w-100'/>

        </form>

      </div>
        
    </div>
  )
}

export default AddProducts