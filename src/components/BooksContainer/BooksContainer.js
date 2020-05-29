import React from 'react';
import './BooksContainer.scss';
import Book from '../Book/Book';

function BooksContainer() {
    return (
        <section className="books-container-section">
            <section className="books">
                <Book />
                <Book />
                <Book />
                <Book />
                <Book />
                <Book />
                <Book />
                <Book />
            </section>
        </section>
    )
}

export default BooksContainer;