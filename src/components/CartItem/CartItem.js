import React, { useRef } from 'react';
import './CartItem.scss';
import test_photo from '../../assets/images/testimonial-portrait-3.jpg';

const CartItem = ({ header }) => {
    const quantityInputRef = useRef(null);

    const handleUpArrow = event => {
        event.preventDefault();
        quantityInputRef.stepUp(1);
    }

    const handleDownArrow = event => {
        event.preventDefault();
        quantityInputRef.stepDown(1);
    }

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

    // Add button focus ring functionality

    return (
        <section className="cart-item">
            <button className="remove-item">X</button>
            <span className="item-img"><img src={test_photo} alt="product"/></span>
            <span className="item-title">
                <h4>Nineteen Eighty-Four</h4>
                <p>George Orwell</p>
            </span>
            <span className="item-price">$21.00</span>
            <form className="item-quantity">
                <label htmlFor="quantity" className="screen-reader-only">item-title quantity</label>
                <input ref={quantityInputRef} type="number" id="quantity" name="quantity" 
                    step="1" min="1" max="99" defaultValue="1" />
                <section className="item-quantity-btns">
                    <button onClick={ handleUpArrow } className="plus">▲</button>
                    <button onClick={ handleDownArrow } className="minus">▼</button>
                </section>
            </form>
            <span className="item-subtotal">$21.00</span>
        </section>
    );
};

export default CartItem;