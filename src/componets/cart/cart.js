import "./cart.css";
import React, { useContext } from "react";
import { GrClose } from "react-icons/gr";
import CartContext from "../../store/CartContextProvider";
import { RiDeleteBin6Line } from "react-icons/ri";
import { CgTrashEmpty } from "react-icons/cg";
import { FaTrashAlt } from "react-icons/fa";
import { useState } from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";

const Cart = ({ onCloseCart }) => {
  const ctx = useContext(CartContext);
  const [emptyCart, setEmptyCart] = useState(false);
  const cartArray = Array.from(new Set(ctx.cart));
  let totalSum = 0;
  cartArray.forEach((item) => {
    totalSum += item.price * Number(item.numbOfTimes);
  });
  console.log(cartArray);
  useEffect(() => {
    if (cartArray.length === 0) {
      setEmptyCart(true);
    }
  }, [cartArray]);
  function cartIsEmptyHandler() {
    setEmptyCart(true);
  }
  function cartIsFullHandler() {
    setEmptyCart(false);
  }
  function closeCartHandler(){
    onCloseCart()
    window.scrollTo({top:0,left:0,behavior:'smooth'})
  }
  return (
    <div className="sidebar-menu-container">
      <div className="sidebar-menu-background" onClick={onCloseCart}></div>

      <div className="sidebar-menu">
        <div className="sidebar-icon-container">
          <GrClose className="sidebar-icon" onClick={onCloseCart} />
        </div>
        {cartArray.length === 0 && <p>There are no Items in the cart</p>}
        {cartArray.length !== 0 &&
          cartArray.map((cart, index) => (
            <div
              key={index}
              className="cart-items-container"
              style={{ display: "flex", gap: "10px" }}
            >
              <div className="cart-item-image">
                <img src={cart.image} height="40px" />
              </div>
              <div className="cart-item-details">
                <p style={{ fontSize: "14px" }}>{cart.title}</p>
                <p style={{ fontSize: "14px", fontWeight: "bold" }}>
                  {`${cart.numbOfTimes}*${cart.price}`}
                </p>
                <p> </p>
              </div>
              <div>
                <RiDeleteBin6Line
                  style={{ alignSelf: "flex-end" }}
                  size={"1.8rem"}
                  onClick={() => ctx.removeCartItem(cart.id)}
                />
              </div>
            </div>
          ))}

        <div>
          <p style={{ textAlign: "center", marginTop: ".6rem" }}>
            {!!!emptyCart && "Empty Cart"}
          </p>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              marginTop: "10px",
            }}
          >
            {!emptyCart && (
              <FaTrashAlt
                size="24px"
                onClick={() => {
                  ctx.clearCart();
                  cartIsEmptyHandler();
                }}
              />
            )}
            {emptyCart && <CgTrashEmpty size="28px" />}
          </div>
        </div>
        {cartArray.length > 0 && (
          <>
          <div className="total-amount">
            <p style={{ fontSize: "20px", fontWeight: "bold" }}>
              Total Amount:&nbsp;
              {new Intl.NumberFormat("en-US", {
                style: "currency",
                currency: "KES",
              }).format(totalSum)}
            </p>
          </div>
          <div className="cart-items-handler">
            <Link to='./cart'>
            <button className='cart-btns' onClick={closeCartHandler}>View Cart</button>
            </Link>
            <button className='cart-btns'>Checkout</button>
          </div>
          </>

        )}
        <div />
      </div>
    </div>
  );
};

export default Cart;
