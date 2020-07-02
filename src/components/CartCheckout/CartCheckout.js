import React from 'react';
import './CartCheckout.scss';

const CartCheckout = ({ quantity, subtotal }) => {
    const order_total = Number(subtotal) + Number(9.99);

    return (
        <section className="cart-checkout">
            <section className="cart-checkout-grid">
                <h2 className="title">Summary</h2>
                <h3 className="title">Cart Total</h3>
                <span className="divider" />
                <span className="quantity">Quantity</span>
                <span className="quantity-number">{quantity} items</span>
                <span className="subtotal">Subtotal</span>
                <span className="subtotal-price">${subtotal}</span>
                <span className="shipping">Shipping</span>
                <span className="shipping-price">$9.99</span>
                <span className="total">Order Total</span>
                <span className="total-price">${order_total}</span>
                <span className="divider-2" />
                <button className="button">Proceed To Checkout</button>
            </section>
        </section>
    );
};

export default CartCheckout;