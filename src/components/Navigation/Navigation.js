import React from 'react';
import './Navigation.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

function Navigation() {
    return (
        <section className="header-nav-section">
            <div>
                <h1 className="title">Bookz</h1>
                <p>Webstore for book lovers</p>
            </div>
            <nav>
                <Link to="/" className="link">Home</Link>
                <Link to="/shop" className="link">Bookstore</Link>
                <Link to="/acc" className="link">My Account</Link>
                <Link to="/about" className="link">Contact</Link>
            </nav>
            <div className="header-nav-icons">
                <FontAwesomeIcon icon={faSearch} />
                <FontAwesomeIcon icon={faShoppingCart} />
            </div>
        </section>
    )
};

export default Navigation;