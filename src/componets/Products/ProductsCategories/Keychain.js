import React from 'react'
import './productsCategories.css'
import CategoriesHeader from './CategoriesHeader'
import { useLocation } from 'react-router-dom'
import { keychains } from '../../../assets/ProductCategories/CategoriesList'
import ProductItem from './ProductItem'


const Keychain = () => {
    const location=useLocation()
  return (
    <div className='padding'>
        <CategoriesHeader title='Keychains' location={location} />
        <div className="bracelet-categories">
      {keychains.map((bracelet) => (
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

export default Keychain
