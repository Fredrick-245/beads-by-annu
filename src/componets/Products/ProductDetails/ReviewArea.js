import React from 'react'
import "./ProductDetails.css";


const ReviewArea = () => {
  return (
    <form>
        <p>Your review</p>
        <textarea rows='10' className='review-textarea' required></textarea>
        <div className='review-contact-details'>
            <div style={{flexGrow:'1'}}>
                <p>Your name</p>
                <input placeholder='Enter your name...' className='review-contacts-input' style={{width:'100%'}} type='name' required></input>
            </div>
            <div style={{flexGrow:'1'}}>
                <p>Your email</p>
                <input placeholder='Enter your email...' className='review-contacts-input' style={{width:'100%'}} type='email' required></input>
            </div>
        </div>
        <input style={{outline:'none' ,width:'20px',height:'20px'}} type='checkbox'></input>
        <p>Save my name and email in this for the next time I comment</p>
        <div style={{width:'100%',display:'flex',justifyContent:'flex-end',marginLeft:'-1rem',marginTop:'.6rem',marginBottom:'3rem'}}>

        <button type='submit' className="order-button" style={{backgroundColor:'blue'}} >Submit</button>
        </div>

      
    </form>
  )
}

export default ReviewArea
