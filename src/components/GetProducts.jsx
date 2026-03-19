import React from 'react'
import { useState ,useEffect} from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'


const GetProducts = () => {
  // initiaizing the hooks.
  const [loading,setLoading]=useState('')
  const [error,setError]=useState('')
  const [products,setProducts]=useState([])
  // sq brackets are used becoz the products are stored in 4m of an array, success is not in the hooks coz it used to store a msg which is not needed.

  const navigate = useNavigate()

  const image_url='http://hopegathoni.alwaysdata.net/static/images/'

  // create a fxn to fetch data from the API
  const fetchproducts = async()=>{
    setLoading('Please wait as we retrieve the products')

    try {
    const response = await axios.get("http://hopegathoni.alwaysdata.net/api/getproductdetails")

    console.log('The response is',response);    

    setProducts(response.data)

    setLoading('')
    }
    catch{
      setLoading('')

      setError(error.message)
    }
  }

  // end of fxn where useEffect is called
  useEffect(()=>{
    fetchproducts()
  },[])
  // sq brackets are used as dependancy array which prevent re-rendering of products or allows products 2 b fetched once.

  return (
    <div className='row'>

      <h1>Available Products</h1>
      <p className='text-warning'>{loading}</p>
      <p className='text-danger'>{error}</p>

      {/* calling .map() to iterate thru each item */}
       
    {/* this div is for the grid sys */}
    
    {/* .map is for iterating thru the products in the backend. */}
    {products.map((product)=>(
      <div className='col-md-3 justify-content-center'>
        <div className='card shadow'>

          <img src={image_url +product.product_photo} alt="cake" className='product_img mt-2'/>

          <div className='card-body'>
            <h5 className='text-success'>{product.product_name}</h5>
            <p className='text-secondary'>{product.product_description}</p>
            <p className='text-warning'>{product.product_cost}</p>

            <input type="submit" 
            className='btn btn-info w-100' 
            value='Purchase now' 
            onClick={()=>navigate('/mpesa',{state:{product}})}/>
          </div>

        </div>
        
      </div>
      ))}
    </div>
  )
}

export default GetProducts