import React, { useEffect } from 'react';
import './Cart.scss';
import PageHeader from '../PageHeader/PageHeader';
import CartItem from '../CartItem/CartItem';
import CartCheckout from '../CartCheckout/CartCheckout';

const Cart = () => {

    useEffect(() => {
        window.scrollTo(0, 0);
      }, [])

    return (
        <main>
            <PageHeader title="Your Cart" color="green"/>
            <section className="cart-container">
                <section className="cart-nav">
                    <h1>Shopping Cart</h1>
                    <section className="cart-nav-btns">
                        <button className="button continue-btn">Continue Shopping</button>
                        <button className="button checkout-btn">Checkout Now</button>
                    </section>
                </section>
                <section className="product-container">
                    <CartItem header={"header"}/>
                    <CartItem />
                    <CartItem />
                    <CartItem />
                    <CartItem />
                </section>
            </section>
            <CartCheckout />
        </main>
    )
};

export default Cart;
