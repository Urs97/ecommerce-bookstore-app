import React, { useContext } from 'react';
import './CartItem.scss';
import CartContext from '../../context/CartContext';

const CartItem = ({ book }) => {
    const context = useContext(CartContext);

    // L is large, M is medium and S is small image format
    const img_url = `http://covers.openlibrary.org/b/olid/${book.cover_edition_key}-L.jpg`;
    const img_alt = `${book.title} book cover`;
    const price = Number(`${book.price[0]}.${book.price[1]}`);
    const subtotal_price = (price * book.quantity).toFixed(2);

    // Prevents default form button submit
    const handleOnSubmit = event => {
        event.preventDefault();
    }

    const handleOnChangeInput = event => {
        const newQuantity = Number(event.target.value);
        if(newQuantity <= 99 && newQuantity >= 1) {
            context.setCustomItemQuantity(book, newQuantity);
        } else return;
    }

    return (
        <section className="cart-item">
            <span className="remove-item-container">
                <button className="remove-item" onClick={() => context.removeProductFromCart(book)}>X</button>
            </span>
            <span className="item-img"><img src={img_url} alt={img_alt}/></span>
            <span className="item-title">
                <h4>{book.title}</h4>
                <p>{book.authors[0].name}</p>
            </span>
            <span className="item-price">${price}</span>
            <form className="item-quantity" onSubmit={handleOnSubmit}>
                <label htmlFor="quantity" className="screen-reader-only">item-title quantity</label>
                <input type="number" id="quantity" name="quantity" 
                    step="1" min="1" max="99" value={book.quantity} onChange={handleOnChangeInput}/>
                <section className="item-quantity-btns">
                    <button onClick={() => context.addQuantityToItem(book)} className="up-arrow">▲</button>
                    <button onClick={() => context.subtractQuantityFromItem(book)} className="down-arrow">▼</button>
                </section>
            </form>
            <span className="item-subtotal">${subtotal_price}</span>
        </section>
    );
};

export default CartItem;