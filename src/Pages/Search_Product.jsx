import React from 'react'
import { useParams } from 'react-router-dom'
import { items } from '../context/Data';
import Products from '../components/Products';

const Search_Product = () => {
  const {term} = useParams();
  const searchProducts = items.filter((pro=> pro.title.toLocaleLowerCase().includes(term.toLocaleLowerCase())))
  return (
    <div>
      <Products items={searchProducts}/>
    </div>
  )
}

export default Search_Product