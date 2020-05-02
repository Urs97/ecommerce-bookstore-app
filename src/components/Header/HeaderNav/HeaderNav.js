import React from 'react';
import './HeaderNav.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';

function HeaderNav() {
    return (
        <section className="header-nav-section">
            <div>
                <h1>Bookz</h1>
                <p>Webstore for book lovers</p>
            </div>
            <nav>
                <a href="#">Home</a>
                <a href="#">Bookstore</a>
                <a href="#">My Account</a>
                <a href="#">Contact</a>
            </nav>
            <div class="header-nav-icons">
                <FontAwesomeIcon icon={faSearch} />
                <FontAwesomeIcon icon={faShoppingCart} />
            </div>
        </section>
    )
};

export default HeaderNav;