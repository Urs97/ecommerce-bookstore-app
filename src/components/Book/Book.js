import React from 'react';
import './Book.scss';

function Book({ book }) {

    if (typeof book === "object") {
        // L is large, M is medium and S is small image format
        const img_url = `http://covers.openlibrary.org/b/olid/${book.cover_edition_key}-L.jpg`;
        const img_alt = `${book.title} book cover`;

        return (
            <div className="book">
                <img src={img_url} alt={img_alt} className="book-img"/>
                <span className="title-container"><h4 className="title">{book.title}</h4></span>
                <p>{book.authors[0].name}</p>
                <span className="price-container">$20.99</span>
                <button className="button">Add to cart</button>
            </div>
        );
    } else {
        return <div>Book is not loaded yet</div>
    }
    
};

export default Book;