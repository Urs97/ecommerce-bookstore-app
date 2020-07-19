import React, { useState, useContext } from 'react';
import './Navigation.scss';

import { Link } from 'react-router-dom';
import CartContext from '../../context/CartContext';
import { useToggleMenu } from '../../hooks/useToggleMenu';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { faBars } from '@fortawesome/free-solid-svg-icons';

const Navigation = () => {
    const context = useContext(CartContext);
    const [menuRef, isOpen, setIsOpen] = useToggleMenu();

    const cartQuantity = context.cart.reduce((count, currentItem) => {
        return count + currentItem.quantity;
      }, 0);

    return (
        <header className="header-nav-section" ref={menuRef}>
            <button 
                className="menu-btn" 
                onClick={() => setIsOpen(isOpen => !isOpen)} 
                role="img" 
                aria-label="open menu button"
                >
                <FontAwesomeIcon icon={faBars} />
            </button>
            <a href="/" className="header-logo">
                <h1 className="title">Bookz</h1>
                <p>Webstore for book lovers</p>
            </a>
            <section className="after-border-section">
                <section className="menu-section">
                    <nav className={`main-menu ${isOpen ? `active` : ``}`}>
                        <Link to="/" className="link js-focus-visible">Home</Link>
                        <Link to="/store" className="link">Bookstore</Link>
                        <Link to="/cart" className="link">Cart</Link>
                        <Link to="/about" className="link">About Us</Link>
                    </nav>
                    <section className="right-menu">
                        <span role="img" aria-label="shopping cart icon">
                            <FontAwesomeIcon icon={faShoppingCart} />
                        </span>
                        <span className="cart-items-num">({cartQuantity})</span>
                    </section>
                </section>
            </section>
        </header>
    )
};

export default Navigation;