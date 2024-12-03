import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {Route, Routes } from 'react-router-dom'

import Home from './Pages/Home'
import About from './Pages/About'
import Cart from './Pages/Cart'
import Collection from './Pages/Collection'
import Contact from './Pages/Contact'
import Login from './Pages/Login'
import Order from './Pages/Order'
import PleaseOrder from './Pages/PleaseOrder'
import Product from './Pages/Product'
import Navbar from './Components/Navbar'
import Footer from './Components/Footer'
import Collections from './Pages/Collections'
import SearchBar from './Components/SearchBar'

function App() {


  return (
    <>
      
      <div className='px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw]'>
        <Navbar/>
        <SearchBar/>
        <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/cart' element={<Cart/>}/>
        {/* <Route path='/collections' element={<Collection/>}/> */}
        <Route path='/collection' element={<Collections />}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/order' element={<Order/>}/>
        <Route path='/pleaseorder' element={<PleaseOrder/>}/>
        <Route path='/product/:productId' element={<Product/>}/>


        </Routes>
        <Footer/>
      
     
      </div>
     
    </>
  )
}

export default App
