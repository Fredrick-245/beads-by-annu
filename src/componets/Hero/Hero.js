import './hero.css'
import React from 'react'
import Category from '../Products/Category'
import { categories } from '../../assets/ProductCategories/CategoriesList'

const Hero = () => {
  return (
    <div className='hero'>
        <h2 className='hero-header'>Shop By Category</h2>
        <div className='product-categories'>

        {categories.map(category=>(
            <Category title={category.title} image={category.imageUrl} link={category.link} grow={category.grow} />
            ))}
            </div>


      
    </div>
  )
}

export default Hero
