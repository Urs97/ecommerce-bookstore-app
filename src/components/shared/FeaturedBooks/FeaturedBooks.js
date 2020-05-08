import React from 'react'
import './FeaturedBooks.scss';
import { Link } from 'react-router-dom';
import Book from '../Book/Book';

function FeaturedBooks() {
    return (
        <section className="featured-books-section">
            <h1>Books Bestsellers</h1>
            <section className="books">
                <Book />
                <Book />
                <Book />
                <Book />
                <Book />
            </section>
            <Link to='/shop' className="button">View More</Link>
        </section>
    )
}

export default FeaturedBooks;