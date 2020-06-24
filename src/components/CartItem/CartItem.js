import React from 'react';
import './CartItem.scss';
import test_photo from '../../assets/images/testimonial-portrait-3.jpg';

const CartItem = ({ header }) => {

    if(header) return (
        <section className="cart-item cart-item-header">
            <span></span>
            <h3 className="title">Image</h3>
            <h3 className="title">Product</h3>
            <h3 className="title">Price</h3>
            <h3 className="title">Quantity</h3>
            <h3 className="title">Subtotal</h3>
        </section>
    )

    return (
        <section className="cart-item">
            <button className="remove-item">X</button>
            <span className="item-img"><img src={test_photo} alt="product"/></span>
            <span className="item-title">
                <h4>Nineteen Eighty-Four</h4>
                <p>George Orwell</p>
            </span>
            <span className="item-price">$21.00</span>
            <span className="item-quantity">Quantity</span>
            <span className="item-subtotal">$21.00</span>
        </section>
    );
};

export default CartItem;