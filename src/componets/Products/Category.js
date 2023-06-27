import React from 'react'
import { Link } from 'react-router-dom'
import './category.css'

const Category = ({image,link,title,grow}) => {
  return (
    <div className='catgory-item'>
        <Link className='category-item-link' to={`${link?link:''}`} style={{textDecoration:'none'}} >
        <div className='catogory-item' style={{backgroundImage:`url(${image})`,flexGrow:grow?`${grow}`:''}}>
            <h2 className='category-header'>{title}</h2>
        </div>
        </Link >
      
     </div>
  )
}

export default Category