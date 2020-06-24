import React, { useEffect } from 'react';
import './Cart.scss';
import PageHeader from '../PageHeader/PageHeader';
import CartItem from '../CartItem/CartItem';

const Cart = () => {

    useEffect(() => {
        window.scrollTo(0, 0);
      }, [])

    return (
        <main>
            <PageHeader title="Your Cart" color="green"/>
            <section className="cart-container">
                <section className="product-container">
                    <CartItem header={"header"}/>
                    <CartItem />
                    <CartItem />
                    <CartItem />
                    <CartItem />
                </section>
            </section>
        </main>
    )
};

export default Cart;
