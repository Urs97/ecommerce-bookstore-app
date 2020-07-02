import React, { useEffect, useRef, useContext } from 'react';
import './Cart.scss';

import ShopContext from '../../context/ShopContext';
import PageHeader from '../PageHeader/PageHeader';
import CartItem from '../CartItem/CartItem';
import CartCheckout from '../CartCheckout/CartCheckout';

const Cart = () => {
    const context = useContext(ShopContext);

    const cartQuantity = context.cart.reduce((count, currentItem) => {
        return count + currentItem.quantity;
      }, 0)

    const cartSubtotalFull = context.cart.reduce((count, item) => {
        return count + (Number(`${item.price[0]}.${item.price[1]}`) * item.quantity);   
      }, 0)

    const cartSubtotal = cartSubtotalFull.toFixed(2);

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
                <h1>Shopping Cart - {cartQuantity} items - ${cartSubtotal}</h1>
                    <section className="cart-nav-btns">
                        <a href="/store" className="button continue-btn">Continue Shopping</a>
                        <button className="button checkout-btn"
                                onClick={() => executeScroll()}>To Checkout</button>
                    </section>
                </section>
                <section className="product-container">
                    {context.cart.length <= 0 && <p>No Item in the Cart!</p>}
                    {context.cart.length > 0 && 
                        <section className="cart-item-header">
                            <span></span>
                            <h3 className="title">Image</h3>
                            <h3 className="title">Product</h3>
                            <h3 className="title">Price</h3>
                            <h3 className="title">Quantity</h3>
                            <h3 className="title">Subtotal</h3>
                        </section>
                    }
                    {context.cart.map(book => <CartItem book={book} key={book.key}/>)}
                </section>
            </section>
            <section ref={CartCheckoutRef}>
                <CartCheckout quantity={cartQuantity} subtotal={cartSubtotal}/>
            </section>
        </main>
    )
};

export default Cart;
