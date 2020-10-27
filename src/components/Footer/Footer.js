import React from "react";
import "./Footer.scss";

import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footer">
      <section className="footer-nav">
        <Link to="/">Home</Link>
        <Link to="/store">Store</Link>
        <Link to="/cart">Cart</Link>
        <Link to="/about">About Us</Link>
      </section>
      <p>
        Bookz © <span>{new Date().getFullYear()}</span> All rights reserved
      </p>
    </footer>
  );
};

export default Footer;
