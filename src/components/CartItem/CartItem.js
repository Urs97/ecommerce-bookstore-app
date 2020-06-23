import React from 'react';
import './CartItem.scss';
import test_photo from '../../assets/images/testimonial-portrait-3.jpg';

const CartItem = () => {
    return (
        <section className="cart-item">
            <span>X</span>
            <span><img src={test_photo} alt="product"/></span>
            <span>Product Title by Author</span>
            <span>Price</span>
            <span>Quantity</span>
            <span>Subtotal</span>
        </section>
    );
};

export default CartItem;