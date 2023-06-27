import { createContext, useState } from "react";

const CartContext = createContext({
  cart: [],
  addCartItem: (item) => {},
  removeCartItem: (id) => {},
  clearCart: () => {},
  animateCart:false
});

export function CartContextProvider({ children }) {
  const [cart, setCartItem] = useState([]);
  const [animateCart,setAnimateCart]=useState(false)
  function addCartItem(item) {
    setCartItem((prevItems) => [item, ...prevItems]);
  }
  function removeCartItem(id) {
    setCartItem(cart.filter((cart) => cart.id !== id));
  }
  function clearCart() {
    setCartItem([]);
  }
  function animateCartHandler (){
    setAnimateCart(true)
  }
  function removeCartAnimation(){
    setAnimateCart(false)
  }
  const value = {
    cart,
    addCartItem,
    removeCartItem,
    clearCart,
    animateCart,
    animateCartHandler,
    removeCartAnimation
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export default CartContext;
