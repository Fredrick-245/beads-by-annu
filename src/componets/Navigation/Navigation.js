import React, { useContext, useEffect } from 'react'
import {RxPerson} from 'react-icons/rx'
import {BsCart2} from 'react-icons/bs'
import {AiOutlineMenu} from 'react-icons/ai'
import { Link } from 'react-router-dom'
import Cart from '../cart/cart'
import './navigation.css'
import SidebarMenu from '../menu/SidebarMenu'
import { useState } from 'react'
import CartContext from '../../store/CartContextProvider'

const Navigation = () => {
    const ctx=useContext(CartContext)
    const [openCart,setOpenCart]=useState(false)
    const [openMenu,setOpenMenu]=useState(false)
    function navigationLogoClickHandler(){
        window.scrollTo(0,0)
    }
    function openCartHandler(){
        setOpenCart(true)
    }
    function closeCartHandler(){
        setOpenCart(false)
    }
    function openMenuHandler(){
        setOpenMenu(true)
    }
    function closeMenuHandler(){
        setOpenMenu(false)

    }
  return (
    <>
    <div className='navigation' id='navigation'>
        <div className='navigation-logo-container'>
            <Link to='/'>
            <img onClick={navigationLogoClickHandler} className='navigation-logo' src='../../assets/annulogo.png'/>
            </Link>
        </div>
        <div className='navigation-links'>
            <a className='track-order-link' href='#'>Track Your Order</a>
            <div className='navigation-icon-container'>

            <RxPerson style={{cursor:'pointer'}} className='navigation-icon'/>
            <div className='cart' style={{animation:ctx.animateCart &&'.5s bubble ease'}} onClick={openCartHandler}>
                <BsCart2 style={{cursor:'pointer'}} className='navigation-icon' />
                <div className='cart-icon-badge'>{Array.from(new Set(ctx.cart)).length}</div>
            </div>
            <AiOutlineMenu style={{cursor:'pointer'}} className='navigation-icon' onClick={openMenuHandler}/>
            </div>
        </div>
        
      
    </div>
        {openMenu && <SidebarMenu  onCloseMenu={closeMenuHandler}/>}
        {openCart && <Cart style={{cursor:'pointer'}} onCloseCart={closeCartHandler}/>}
    </>

  )
}

export default Navigation
