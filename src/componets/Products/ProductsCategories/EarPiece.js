import React from 'react'
import './productsCategories.css'
import CategoriesHeader from './CategoriesHeader'
import { useLocation } from 'react-router-dom'
import { earRings } from '../../../assets/ProductCategories/CategoriesList'
import ProductItem from './ProductItem'

const EarPiece = () => {
    const location=useLocation()
  return (
    <div className='padding'>
      <h1>Earrings</h1>
      <CategoriesHeader title='Earrings' location={location}/>
      <div className="bracelet-categories">
      {earRings.map((bracelet) => (
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

export default EarPiece
