import React, { useState, useContext } from 'react';
import './Book.scss';

import ShopContext from '../../context/ShopContext';

const Book = ({ book }) => {
    const context = useContext(ShopContext);

    const [isHovered, setIsHovered] = useState(false);

    // L is large, M is medium and S is small image format
    const img_url = `http://covers.openlibrary.org/b/olid/${book.cover_edition_key}-L.jpg`;
    const img_alt = `${book.title} book cover`;
    const price = Number(`${book.price[0]}.${book.price[1]}`);

    return (
        <div className="book">
            {!isHovered && (
                <img src={img_url} alt={img_alt} className="book-img"
                onMouseEnter={() => setIsHovered(true)}/>
            )}
            {isHovered && (
                <div className="book-img hovered-book-img" onMouseLeave={() => setIsHovered(false)}>
                    <span>Details</span>
                    <button className="button">View More</button>
                </div>
            )}
            <span className="book-title-container"><h4 className="title">{book.title}</h4></span>
            <p>{book.authors[0].name}</p>
            <span className="book-price-container title">${price}</span>
            <button className="button" onClick={() => context.addProductToCart(book)}>Add to cart</button>
        </div>
    );
};

export default Book;