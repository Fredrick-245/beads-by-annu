import React from 'react'
import './productsCategories.css'
import CategoriesHeader from './CategoriesHeader'
import { neckpieces } from '../../../assets/ProductCategories/CategoriesList'
import { useLocation } from 'react-router-dom'
import ProductItem from './ProductItem'


const NeckPieces = () => {
    const location=useLocation()
  return (
    <div className='padding'>
        <CategoriesHeader title='Necklaces' location={location}/>
        <div className="bracelet-categories">
      {neckpieces.map((bracelet) => (
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

export default NeckPieces
