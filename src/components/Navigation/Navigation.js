import React, { useContext } from 'react';
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
        <>
            <nav className={`mobile-main-menu ${isOpen ? `active` : ``}`} ref={menuRef}>
                <Link to="/" 
                    className="link js-focus-visible"
                    onClick={() => setIsOpen(isOpen => !isOpen)}
                    >Home
                </Link>
                <Link to="/store"
                     className="link"
                     onClick={() => setIsOpen(isOpen => !isOpen)}
                     >Bookstore
                </Link>
                <Link to="/cart" 
                    className="link"
                    onClick={() => setIsOpen(isOpen => !isOpen)}
                    >Cart
                </Link>
                <Link to="/about" 
                    className="link"
                    onClick={() => setIsOpen(isOpen => !isOpen)}
                    >About Us
                </Link>
            </nav>
            <header className="header-section">
                <button className="menu-btn" onClick={() => setIsOpen(isOpen => !isOpen)}>
                    <FontAwesomeIcon icon={faBars} />
                </button>
                <a href="/" className="header-logo">
                    <h1 className="title">Bookz</h1>
                    <p>Webstore for book lovers</p>
                </a>
                <nav className="main-menu">
                    <Link to="/" 
                        className="link js-focus-visible">Home</Link>
                    <Link to="/store" className="link">Bookstore</Link>
                    <Link to="/cart" className="link">Cart</Link>
                    <Link to="/about" className="link">About Us</Link>
                    <span role="img" aria-label="shopping cart icon">
                        <FontAwesomeIcon icon={faShoppingCart} />
                    </span>
                    <span className="cart-items-num">({cartQuantity})</span>
                </nav>
                <section className="mobile-right-menu">
                    <span role="img" aria-label="shopping cart icon">
                        <FontAwesomeIcon icon={faShoppingCart} />
                    </span>
                    <span aria-label="shopping cart items number" 
                        className="cart-items-num">({cartQuantity})</span>
                </section>
            </header>
        </>
    )
};

export default Navigation;