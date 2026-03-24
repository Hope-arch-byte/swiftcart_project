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

    </div>
    </Router>
    
  );
}

export default App;
