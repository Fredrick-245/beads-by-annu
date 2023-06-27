import "./productItem.css";
import React from "react";
import { Link } from "react-router-dom";

const ProductItem = ({ image, size, title, description, price, quantity,link,onAddToCart,id}) => {
 function linkClickedHandler(){
  window.scrollTo({top:20,left:0,behavior:'smooth'})
 }
  return (
    <Link to={link && link} style={{textDecoration:'none',color:'#000'}} onClick={linkClickedHandler}>
    <div className="product-item">
      <div className="product-image-container">
        <img className="category-picture" src={image} alt={description}></img>
      </div>
      <div className="product-item-description">
        <p className="product-description">{description}</p>
        <p className="product-price">{new Intl.NumberFormat('en-US',{style:'currency',currency:'KES'}).format(price)}</p>
        <h2 className="product-title">{title}</h2>
        <div className="product-button-container">
          <button className="product-button" >
            {quantity === 0 ? "Selecet Options" : "Add to cart"}
          </button>
        </div>
      </div>
    </div>
    </Link>
  );
};

export default ProductItem;
