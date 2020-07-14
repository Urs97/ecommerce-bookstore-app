import React, { useContext } from 'react';
import './Navigation.scss';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import CartContext from '../../context/CartContext';

const Navigation = () => {
    const context = useContext(CartContext);

    const cartQuantity = context.cart.reduce((count, currentItem) => {
        return count + currentItem.quantity;
      }, 0)

    return (
        <header className="header-nav-section">
            <a href="/" className="header-logo">
                <h1 className="title">Bookz</h1>
                <p>Webstore for book lovers</p>
            </a>
            <nav>
                <Link to="/" className="link js-focus-visible">Home</Link>
                <Link to="/store" className="link">Bookstore</Link>
                <Link to="/cart" className="link">Cart</Link>
                <Link to="/about" className="link">About Us</Link>
                <span role="img" aria-label="shopping cart icon">
                    <FontAwesomeIcon icon={faShoppingCart} />
                </span>
                <span className="cart-items-num">({cartQuantity})</span>
            </nav>
        </header>
    )
};

export default Navigation;