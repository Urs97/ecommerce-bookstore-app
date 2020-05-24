import React from 'react'
import './BooksContainer.scss';
import { Link } from 'react-router-dom';
import Book from '../Book/Book';

function BooksContainer() {
    return (
        <section className="books-container-section">
            <h1>Books Bestsellers</h1>
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
            <Link to='/store' className="button">View More</Link>
        </section>
    )
}

export default BooksContainer;