import React from 'react'
import './productsCategories.css'
import { useLocation } from 'react-router-dom'
import CategoriesHeader from './CategoriesHeader'
import ProductItem from './ProductItem'
import { customizedProducts } from '../../../assets/ProductCategories/CategoriesList'

const CustomizedProducts = () => {
    const location=useLocation()
  return (
    <div className='padding'>
        <CategoriesHeader title='Customized Products' location={location}/>
        <div className="bracelet-categories">
      {customizedProducts.map((bracelet) => (
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

export default CustomizedProducts
