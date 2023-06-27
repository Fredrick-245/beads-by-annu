import React from "react";
import "./viewcart.css";
import { useLocation } from "react-router-dom";
import CategoriesHeader from "../../Products/ProductsCategories/CategoriesHeader";
import { useContext } from "react";
import CartContext from "../../../store/CartContextProvider";
import { useState } from "react";
import { GrAdd } from "react-icons/gr";
import { FiMinus } from "react-icons/fi";

const ViewCart = () => {
  const [numberOfItems, setNumberOfItems] = useState(0);

  const location = useLocation();
  const ctx = useContext(CartContext);
  return (
    <div className="padding">
      <CategoriesHeader title="Cart" location={location} />
      <div className="view-cart-container">
        <div className="cart-container">
          <div className="titles-hadlers">
            {/* <div><h6>IMAGE</h6></div>
            <div><h6>PRODUCT</h6></div>
            <div><h6>PRICE</h6></div>
            <div><h6>QUANTITY</h6></div>
            <div><h6>SUBTOTAL</h6></div> */}
          </div>
          {ctx.cart.map((cartItem) => {
            function addItemHandler() {
              setNumberOfItems((prevNumber) => prevNumber + 1);
            }
            function removeItemHandler() {
              if (numberOfItems < 1) {
                return;
              }
              setNumberOfItems((prevNumber) => prevNumber - 1);
            }

            return (
              <div key={Math.random()} className="cart-subcontainer">
                <img width="100px" height="100px" src={cartItem.image} />
                <div>
                  <h4>{cartItem.title}</h4>
                </div>
                <div className="viewcart-buttons-container">
                  <button
                    style={{ padding: "10.4px 14px" }}
                    className="view-cart-buttons"
                    onClick={removeItemHandler}
                  >
                    <FiMinus />
                  </button>
                  <p className="view-cart-buttons">
                    {cartItem.numbOfTimes + numberOfItems}
                  </p>
                  <button
                    style={{ padding: "10.4px 14px" }}
                    className="view-cart-buttons"
                    onClick={addItemHandler}
                  >
                    <GrAdd />
                  </button>
                </div>
                <div>
                  <h4>
                    {new Intl.NumberFormat("en-US", {
                      style: "currency",
                      currency: "KES",
                    }).format(
                      cartItem.price * (cartItem.numbOfTimes + numberOfItems)
                    )}
                  </h4>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ViewCart;
