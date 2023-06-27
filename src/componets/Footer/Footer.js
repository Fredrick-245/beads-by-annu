import "./footer.css";
import React from "react";
import { BsInstagram } from "react-icons/bs";
import { categories } from "../../assets/ProductCategories/CategoriesList";
import { Link } from "react-router-dom";

const Footer = () => {
  function scrollToTop() {
    window.scrollTo({
      top:0,
      left:0,
      behavior:'smooth'
    });
  }
  const date=new Date()
  const year=date.getFullYear()
  return (
    <div className="footer">
      <div className="footer-about-us">
        <div className="us">
          <img
            className="footer-logo"
            src="../../assets/annulogo.png"
            onClick={scrollToTop}
          />
          <h2>Beads by Annu</h2>
          <p>
            <span className="contact-us-subText">Add:&nbsp;</span>Ruiru,Nairobi
            kenya
          </p>
          <p>
            <span className="contact-us-subText">Email:&nbsp;</span>
            beadsbyannu@gmail.com
          </p>
          <p>
            <span className="contact-us-subText">COntact:&nbsp;</span>0741954679
          </p>
          <p>
            <span className="contact-us-subText">Timings:&nbsp;</span>8:30 AM TO
            8:30PM
          </p>
        </div>
        <div className="customer-care">
          <h2>Customer Care</h2>
          <a className="footer-link" href="#">
            Terms and conditions
          </a>
          <a className="footer-link" href="#">
            Privacy and Policy
          </a>
          <a className="footer-link" href="#">
            Return and Refund Policy
          </a>
          <a className="footer-link" href="#">
            Shiping Policy
          </a>
          <a className="footer-link" href="#">
            About us
          </a>
          <a className="footer-link" href="#">
            Contact us
          </a>
        </div>
        <div className="our-products">
          <h2>Our Products</h2>
           {categories.map(category=>(
            <Link className="footer-link" to={`${category.link}`} onClick={()=>{window.scrollTo({top:200,left:0,behavior:'smooth'})}}>
           <p> {category.title}</p>
            </Link>
           ))}
        </div>
      </div>
      <div className="footer-follow">
        <p>Follow us</p>
        <a
          href="https://instagram.com/beadsbyannu?igshid=NTc4MTIwNjQ2YQ=="
          target="_blank"
        >
          <BsInstagram className="footer-instagram-link" />
        </a>
      </div>
      <p className="copyright-text">All Rights Reseverd &copy; Beads by Annu {year} | Created by Fredrick Ndemo</p>
    </div>
  );
};

export default Footer;
