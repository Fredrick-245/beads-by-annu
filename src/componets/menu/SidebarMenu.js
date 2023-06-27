import React from "react";
import "./sidebar.css";
import { categories } from "../../assets/ProductCategories/CategoriesList";
import { Link } from "react-router-dom";
import { GrClose } from "react-icons/gr";
import { BsSearch } from "react-icons/bs";

const SidebarMenu = ({onCloseMenu}) => {
    function closeMenuHandler(){
        onCloseMenu()
    }
  return (
    <div className="sidebar-menu-container" >
        <div className="sidebar-menu-background" onClick={closeMenuHandler}></div>
      <div className="sidebar-menu">
        <div className="sidebar-icon-container">
          <GrClose className="sidebar-icon" onClick={closeMenuHandler}/>
        </div>
        <div className="sidebar-search-container">
          <input
            type="search"
            className="sidebar-search"
            placeholder="Search for products..."
          />
          <BsSearch className="sidebar-search-icon" />
        </div>
        <div className="sidebar-categories-container">
          {categories.map((category) => (
            <Link  to={category.link} style={{textDecoration:'none',color:'var(--primary-color50)'}} onClick={closeMenuHandler}>
            <p className="sidebar-menu-link">{category.title}</p>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SidebarMenu;
