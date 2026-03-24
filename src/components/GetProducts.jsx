import React from 'react'
import { useState ,useEffect} from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom'


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

      <p className='text-warning'>{loading}</p>
      <p className='text-danger'>{error}</p>

      <div className="row">
        <div className="col-md-12">
          <div className="carousel slide" data-bs-ride='carousel' id='mycarousel'>
            <div className="carousel-inner">
              <div className="carousel-item">
                <img src="" alt="" />
              </div>
              <div className="carousel-item">
                <img src="" alt="" />
              </div>
              <div className="carousel-item">
                <img src="" alt="" />
              </div>
              
            </div>

          </div>
        </div>
      </div>

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
        <br />
        
      </div>
      ))}
       <footer class="p-3 text-center text-white">
        <br /><br />
        <br /><br />
        <div className="row better">
          <div className="col-md-4">
            <h4>About Us</h4>
            <dl>
              <dt><b>Swiftcart</b></dt>
              <dd>We are a company dedicated to selling our customers with quality products at your fingertips wherever you are for free, at a considarable price. Delivery is countrywide and absolutely free provided you are near our picking stations.</dd>
            </dl>
          </div>
          <div className="col-md-4">
            <h4>How you can contact us</h4>
            <p>Talk to us via email
              <br />
              <b>www.swiftcart.com</b>
            </p>

          </div>
          <div className="col-md-4">
            <h4>Find us</h4>
            <Link to="https:/www.facebook.com"><img src="images/fb.png" alt="" /></Link>
            <Link to="https:/www.instagram.com"><img src="images/in.png" alt="" /></Link>
            <Link to="https:/www.x.com"><img src="images/x.png" alt="" /></Link>
          </div>


        </div>
        <b className='bg-dark bold'>Developed by Hope &copy; All rights Reserved</b>

      </footer>
    </div>
  )
}

export default GetProducts