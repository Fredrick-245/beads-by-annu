import Footer from "./componets/Footer/Footer";
import Navigation from "./componets/Navigation/Navigation";
import Hero from "./componets/Hero/Hero";
import Bracelets from "./componets/Products/ProductsCategories/Bracelets";
import CustomizedProducts from "./componets/Products/ProductsCategories/CustomizedProducts";
import EarPiece from "./componets/Products/ProductsCategories/EarPiece";
import Keychain from "./componets/Products/ProductsCategories/Keychain";
import NeckPieces from "./componets/Products/ProductsCategories/NeckPieces";
// import Strings from "./componets/Products/ProductsCategories/Strings";
import RawMarterials from "./componets/Products/ProductsCategories/RawMarterials";
import { braceletes } from "./assets/ProductCategories/CategoriesList";
import { useContext } from "react";

import { Outlet, createBrowserRouter } from "react-router-dom";
import { RouterProvider } from "react-router-dom";
import ProductDetails from "./componets/Products/ProductDetails/ProductDetails";
import CartContext, { CartContextProvider } from "./store/CartContextProvider";
import { useLayoutEffect } from "react";
import ViewCart from "./componets/cart/ViewCart/ViewCart";
function LayoutHelper() {
  return (
    <>
      <Navigation />
      <Outlet />
      <Footer />
    </>
  );
}
function BrowserRouter() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <LayoutHelper />,
      children: [
        {
          path: "/",
          element: <Hero />,
          // children: [
        },
        {
          path: "/bracelets",
          element: <Bracelets />,
          children: [
            {
              path: ":id",
              element: <ProductDetails />,
            },
          ],
        },
        { path: "/customized", element: <CustomizedProducts /> },
        { path: "/earpiece", element: <EarPiece /> },
        { path: "/keyChains", element: <Keychain /> },
        { path: "/neckPieces", element: <NeckPieces /> },
        { path: "/rawMarterials", element: <RawMarterials /> },
        {path:'/cart',element:<ViewCart/>}
      ],
    },

  ]);
  return <RouterProvider router={router} />;
}

function App() {
  const ctx = useContext(CartContext);
  useLayoutEffect(() => {
    const ids = JSON.parse(localStorage.getItem("ids"));
    const cartItems = ids.map((id) => {
      return braceletes.filter((brace) => brace.id === id);
    });
    cartItems.forEach((cartItem) => {
      const [newCartItem] = cartItem;
      ctx.addCartItem(newCartItem);
    });
  }, []);

  return (
    <CartContextProvider>
      <div className="App">
        {/* <Navigation /> */}
        <BrowserRouter />
        {/* <Footer /> */}
      </div>
    </CartContextProvider>
  );
}

export default App;
