import React from 'react';
import './CartCheckout.scss';

const CartCheckout = () => {
    return (
        <section className="cart-checkout">
            <section className="cart-checkout-grid">
                <h2 className="title">Summary</h2>
                <h3 className="title">Cart Total</h3>
                <span className="divider" />
                <span className="quantity">Quantity</span>
                <span className="quantity-number">4 items</span>
                <span className="subtotal">Subtotal</span>
                <span className="subtotal-price">$400.00</span>
                <span className="shipping">Shipping</span>
                <span className="shipping-price">$9.99</span>
                <span className="total">Order Total</span>
                <span className="total-price">$409.99</span>
                <span className="divider-2" />
                <button className="button">Proceed To Checkout</button>
            </section>
        </section>
    );
};

export default CartCheckout;