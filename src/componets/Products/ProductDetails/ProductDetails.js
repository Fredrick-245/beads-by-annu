import { useLocation, useParams } from "react-router-dom";
import "./ProductDetails.css";
import React, { useContext, useEffect, useState } from "react";
import { braceletes } from "../../../assets/ProductCategories/CategoriesList";
import CategoriesHeader from "../ProductsCategories/CategoriesHeader";
import { GrAdd } from "react-icons/gr";
import { AiOutlineMinus } from "react-icons/ai";
import Rate from "./Rate";
import ReviewArea from "./ReviewArea";
import CartContext from "../../../store/CartContextProvider";

const ProductDetails = ({ onChangeLocation }) => {
  const ctx = useContext(CartContext);
  const [selectedSize, setSelectedSize] = useState("");
  const [numberOfItems, setNumberOfItems] = useState(1);
  const { id } = useParams();
  function sizeInputHandler(e) {
    setSelectedSize(+e.target.innerText);
  }
  function addCartItemsHandler() {
    setNumberOfItems((prevState) => prevState + 1);
  }
  function removeCartItemsHandler(e) {
    if (numberOfItems === 1) {
      return;
    }

    setNumberOfItems((prevState) => prevState - 1);
  }

  //   const storedid=localStorage.getItem('id')
  const [bracelet] = braceletes.filter((bracelet) => bracelet.id === id);
  const location = useLocation();
  function addToCartHandler() {
    ctx.addCartItem({ ...bracelet, numbOfTimes: numberOfItems });
    ctx.animateCartHandler();
    setTimeout(()=>{
    ctx.removeCartAnimation();
      
    },1000)
    ctx.cart.forEach((cartItem) => {
      if (cartItem.id === bracelet.id) {
        ctx.cart.shift();
        return;
      } else {
      }
    });
    const ids = [];
    ctx.cart.forEach((cartItem) => {
      ids.push(cartItem.id);
    });
    const newIds = Array.from(new Set(ids));
    localStorage.setItem("ids", JSON.stringify(newIds));
  }

  return (
    <div className=" product-details-container">
      <CategoriesHeader title={`${bracelet.title}`} location={location} />
      <div className="product-details-subcontainer">
        <div className="product-details-image">
          <img src={bracelet.image}></img>
        </div>
        <div className="product-details">
          <div className="product-details-header">
            <h2>{bracelet.title}</h2>
          </div>
          <div className="product-details-price">
            <p>
              {new Intl.NumberFormat("en-US", {
                style: "currency",
                currency: "KES",
              }).format(bracelet.price)}
            </p>
          </div>
          <div className="bracelet-size-p-container">
            <h2>Size</h2>
            <div className="bracelet-size-container">
              {bracelet.size.map((size) => (
                // <div className="bracelet-size">
                <li key={Math.random()} style={{ listStyle: "none" }}>
                  <p
                    key={size}
                    className="bracelet-size"
                    style={{
                      border: `${
                        selectedSize && "1px solid var(--primary-color20)"
                      }`,
                    }}
                    onClick={sizeInputHandler}
                  >
                    {size}
                  </p>
                </li>
                // </div>
              ))}
            </div>
            {selectedSize && (
              <h3 className="selected-p">
                You selected size {`${selectedSize}`}
              </h3>
            )}
          </div>
          <div className="order-container">
            <div className="number-orders">
              <button
                className="cart-icon-number"
                onClick={removeCartItemsHandler}
              >
                <AiOutlineMinus />
              </button>
              <p className="cart-input">{numberOfItems}</p>
              <button
                className="cart-icon-number"
                onClick={addCartItemsHandler}
              >
                <GrAdd />
              </button>
            </div>
            <div className="order-button-container">
              <button className="order-button" onClick={addToCartHandler}>
                Add to Cart
              </button>
            </div>
          </div>
          <div className="product-details-description">
            <h2>Description</h2>
            <p className="bracelet-details-par">{bracelet.description}</p>
          </div>
          <div className="product-details-review">
            <h2>Reviews</h2>
            {bracelet?.review ? (
              <p>This product has 3 stars</p>
            ) : (
              <p>There are no reviews yet</p>
            )}
            <div className="review-section">
              <p>
                Your email address wont be published.All fields are required
              </p>
              <p
                style={{
                  marginTop: "10px",
                }}
              >
                Your rating:
              </p>
              <Rate />
              <ReviewArea />
            </div>
          </div>
          {/*  */}
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
