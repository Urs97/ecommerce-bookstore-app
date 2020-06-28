import React, { useState } from 'react';
import './CartItem.scss';
import test_photo from '../../assets/images/testimonial-portrait-3.jpg';

const CartItem = ({ header }) => {
    const [quantityValue, setQuantityValue] = useState(1);

    const handleUpArrow = event => {
        event.preventDefault();     
        (quantityValue < 99 && setQuantityValue(quantityValue + 1))
    }

    const handleDownArrow = event => {
        event.preventDefault();
        (quantityValue > 1 && setQuantityValue(quantityValue - 1));
    }

    const handleOnChangeInput = event => {
        const newValue = Number(event.target.value);
        if(newValue <= 99 && newValue >= 1) {
            setQuantityValue(newValue);
        } else return;
        
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
                <input type="number" id="quantity" name="quantity" 
                    step="1" min="1" max="99" value={quantityValue} onChange={handleOnChangeInput}/>
                <section className="item-quantity-btns">
                    <button onClick={ handleUpArrow } className="up-arrow">▲</button>
                    <button onClick={ handleDownArrow } className="down-arrow">▼</button>
                </section>
            </form>
            <span className="item-subtotal">$21.00</span>
        </section>
    );
};

export default CartItem;