import React from 'react'
import { Routes,Route} from "react-router-dom"
import Home from './pages/Home';
import Collection from './pages/Collection';
import About from './pages/About';
import Contact from './pages/Contact';
import Cart from './pages/Cart';
import Login from './pages/Login';
import Product from './pages/Product';
import Order from './pages/Order';
import PlaceOrder from './pages/PlaceOrder';
import NavBar from './components/NavBar';

const App = () => {
  return (
    <div className='sm:px-6 lg:px-10'>
      <NavBar />
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/collection' element={<Collection/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/prdoduct/:productId' element={<Product/>}/>
        <Route path='/orders' element={<Order/>}/>
        <Route path='/place-order' element={<PlaceOrder/>}/>
      </Routes>
    </div>
  )
}

export default App;