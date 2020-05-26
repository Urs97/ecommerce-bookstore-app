import React from 'react';
import './Book.scss';

function Book() {
    return (
        <div className="book">
            <div className="book-img"></div>
            <h4 className="title">Title</h4>
            <p>Author</p>
            <span>$20.99</span>
            <button className="button">Add to cart</button>
        </div>
    )
}

export default Book;