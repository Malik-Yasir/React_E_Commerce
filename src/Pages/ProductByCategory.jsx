import React from 'react'
import VideoPlayer from '../components/VideoPlayer'
import Products from '../components/Products'
import { useParams } from 'react-router-dom'
import { items, Videos } from '../context/Data'

const ProductByCategory = () => {
const {cat} = useParams();

const videoByCategory = Videos.find(vid=>vid.category.toLocaleLowerCase()===cat.toLocaleLowerCase());
const productsByCategory = items.filter(pro=>pro.category.toLocaleLowerCase()===cat.toLocaleLowerCase());
  return (
    <div>
      <VideoPlayer src={videoByCategory.url}/>
      <Products items={productsByCategory}/>
    </div>
  )
}

export default ProductByCategory