import React from "react";
import { Link } from "react-router-dom";
import "./BreadCrumbs.css";

const BreadCrumbs = ({ location }) => {
  let currentLink = "";
  const crumbs = location.pathname
    .split("/")
    .filter((link) => link !== "")
    .map((crumb) => {
      currentLink += `/${crumb}`;
      return (
        <div className="crumb" key={crumb}>
          <Link
            style={{
              textDecoration: "none",
              color: 'var(--primary-color20)',
            }}
            to={currentLink}
          >
            {crumb}
          </Link>
        </div>
      );
    });
  return <div className="bread-crumbs">{crumbs}</div>;
};

export default BreadCrumbs;
