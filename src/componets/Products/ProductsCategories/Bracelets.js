import React from "react";
import "./bracelets.css";
import CategoriesHeader from "./CategoriesHeader";
import { useLocation } from "react-router-dom";
import { braceletes } from "../../../assets/ProductCategories/CategoriesList";
import ProductItem from "./ProductItem";
import { useState } from "react";
import { Outlet } from "react-router-dom";

const Bracelets = () => {
  const [braceletOption, setBraceletOption] = useState("");
  const [params, setParams] = useState("");
  const [productParam, setProductParams] = useState("");
  function addToCartHandler(){
    // console.log()
    console.log('Hey')
  }
  const location = useLocation();
  function braceletChangeHandler(event) {
    setBraceletOption(event.target.value);
  }
  function setParamsHandler(params) {
    setParams(params);
  }
  const braceletOptions = [
    "All bracelets",
    "Solid bracelets",
    "Crystal bracelets",
    "Evil eye bracelets",
    "Charm bracelet",
    "Pearl bracelets",
    "Matching bracelets",
  ];
  let content = (
    <>
      <CategoriesHeader title="Bracelets" location={location} />

      <div className="bracelet-header">
        <h2>Shop our custom made bracelets here!</h2>
        <select
          className="bracelet-select"
          placeholder="Select bracelet option..."
          onChange={braceletChangeHandler}
        >
          {braceletOptions.map((option) => (
            <option className="bracelet-option">{option}</option>
          ))}
        </select>
      </div>
      <div className="bracelet-categories">
        {braceletes.map((bracelet) => (

          <ProductItem
            title={bracelet.title}
            image={bracelet.image}
            description={bracelet.description}
            price={bracelet.price}
            quantity={bracelet.quantity}
            link={bracelet.id}
            id={bracelet.id}
            onAddToCart={addToCartHandler}
            key={Math.random().toString()+bracelet.id}
          />

        ))}
      </div>
    </>
  );
  if(location.pathname!=='/bracelets'){
    content=<Outlet/>
  }
  return (
    <div className="padding">
      {content}
    </div>
  );
};

export default Bracelets;
