import React, { useState } from 'react';
import './CartItem.scss';

const CartItem = ({ book }) => {
    const [quantityValue, setQuantityValue] = useState(book.quantity);

    // L is large, M is medium and S is small image format
    const img_url = `http://covers.openlibrary.org/b/olid/${book.cover_edition_key}-L.jpg`;
    const img_alt = `${book.title} book cover`;
    const price = Number(`${book.price[0]}.${book.price[1]}`);
    const subtotal_price = (price * book.quantity).toFixed(2);

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

    // Add button focus ring functionality

    return (
        <section className="cart-item">
            <button className="remove-item">X</button>
            <span className="item-img"><img src={img_url} alt={img_alt}/></span>
            <span className="item-title">
                <h4>{book.title}</h4>
                <p>{book.authors[0].name}</p>
            </span>
            <span className="item-price">${price}</span>
            <form className="item-quantity">
                <label htmlFor="quantity" className="screen-reader-only">item-title quantity</label>
                <input type="number" id="quantity" name="quantity" 
                    step="1" min="1" max="99" value={quantityValue} onChange={handleOnChangeInput}/>
                <section className="item-quantity-btns">
                    <button onClick={ handleUpArrow } className="up-arrow">▲</button>
                    <button onClick={ handleDownArrow } className="down-arrow">▼</button>
                </section>
            </form>
            <span className="item-subtotal">${subtotal_price}</span>
        </section>
    );
};

export default CartItem;