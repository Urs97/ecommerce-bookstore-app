import React from 'react';
import './Footer.scss';
import { Link } from 'react-router-dom';

function Footer() {
    return (
        <footer className="footer">
            <section className="footer-nav">
                <Link to="/">Home</Link>
                <Link to="/store">Store</Link>
                <Link to="/about">About Us</Link>
                <Link to="/about">TOS</Link>
                <Link to="/about">Contact Us</Link>
            </section>
            <p>Bookz © 2020 All rights reserved</p>
        </footer>
    )
}

export default Footer;