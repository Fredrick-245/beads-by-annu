import './productsCategories.css'
import React from 'react'
import BreadCrumbs from '../BreadCrumbs'
import { categories } from '../../../assets/ProductCategories/CategoriesList'
import ProductItem from './ProductItem'

const CategoriesHeader = ({title,location}) => {
    // console.log(location)
  return (
    <div className='categories-header'>
        <h2 style={{marginLeft:'.3rem'}}>{title}</h2>
        <BreadCrumbs location={location}/>


      
    </div>
  )
}

export default CategoriesHeader
