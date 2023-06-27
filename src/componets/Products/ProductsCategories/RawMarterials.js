import React from 'react'
import './productsCategories.css'
import { useLoaderData, useLocation } from 'react-router-dom'
import CategoriesHeader from './CategoriesHeader'
import ProductItem from './ProductItem'
import { rawMarterials } from '../../../assets/ProductCategories/CategoriesList'

const RawMarterials = () => {
    const location=useLocation()
  return (
    <div className='padding'>
        <h2>Raw Marterials</h2>
        <CategoriesHeader title='Raw Marterials' location={location}/>
        <div className="bracelet-categories">
      {rawMarterials.map((bracelet) => (
          <ProductItem
          title={bracelet.title}
          image={bracelet.image}
          description={bracelet.description}
          price={bracelet.price}
          />
          ))}
          </div>
      
    </div>
  )
}

export default RawMarterials
