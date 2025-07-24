import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Card from './Pages/Card'
import All_Products from './components/All_Products'
import ProductByCategory from './Pages/ProductByCategory'
import Search_Product from './Pages/Search_Product'
import Trending_Slider from './components/Trending_Slider'
import Product_Detail from './Pages/Product_Detail'

const App = () => {
  return (
    <Router>
      <Navbar/>
      <Routes> 
        <Route path='/' element={<All_Products/>}/>
        <Route path='/card' element={<Card/>}/>
        <Route path='/product/:id' element={<Product_Detail/>}/>
        <Route path='/product/category/:cat' element={<ProductByCategory />}/>
        <Route path='/product/search/:term' element={<Search_Product/>}/>
      </Routes>
      <Trending_Slider/>
    </Router>
  )
}

export default App