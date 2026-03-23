import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import AddProducts from './components/AddProducts';
import GetProducts from './components/GetProducts';
import Mpesa from './components/Mpesa';
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';
import {BrowserRouter as Router,Routes,Route,Link} from 'react-router-dom'

function App() {
  return (
    <Router>
    <div className="App">
      <header id="App-header">
        <h1><Link to="/" className='navbar-brand text-dark'>Swiftcart</Link></h1>
      </header>
      <nav>
        <Link to='/' className='App-nav'>Products</Link>
        <Link to='/addproducts'className='App-nav'>Add Products</Link>
        <Link to='/signin'className='App-nav'>Sign In</Link>
        <Link to='/signup'className='App-nav'>Sign Up</Link>
      </nav>
      
      {/* <AddProducts/>
      <GetProducts/>
      <Mpesa/>
      <SignIn/>
      <SignUp/> */}

      <Routes>
        <Route path='/'element={<GetProducts/>}/>
        <Route path='/addproducts'element={<AddProducts/>}/>
        <Route path='/signin'element={<SignIn/>}/>
        <Route path='/signup'element={<SignUp/>}/>
        <Route path='/mpesa'element={<Mpesa/>}/>
      </Routes>

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
    </Router>
    
  );
}

export default App;
