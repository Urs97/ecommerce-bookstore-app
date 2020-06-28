import React, { useEffect, useRef } from 'react';
import './Cart.scss';
import PageHeader from '../PageHeader/PageHeader';
import CartItem from '../CartItem/CartItem';
import CartCheckout from '../CartCheckout/CartCheckout';

const Cart = () => {
    const CartCheckoutRef = useRef(null);

    useEffect(() => {
        window.scrollTo(0, 0);
      }, [])

    const scrollToRef = (ref) => window.scrollTo(0, ref.current.offsetTop, 'smooth');
    const executeScroll = () => scrollToRef(CartCheckoutRef);

    return (
        <main>
            <PageHeader title="Your Cart" color="green"/>
            <section className="cart-container">
                <section className="cart-nav">
                    <h1>Shopping Cart- total- nr of items</h1>
                    <section className="cart-nav-btns">
                        <a href="/store" className="button continue-btn">Continue Shopping</a>
                        <button className="button checkout-btn"
                                onClick={() => executeScroll()}>To Checkout</button>
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
            <section ref={CartCheckoutRef}>
                <CartCheckout />
            </section>
        </main>
    )
};

export default Cart;
