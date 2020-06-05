import React from 'react';
import './BooksContainer.scss';
import Book from '../Book/Book';

function BooksContainer({ books }) {

    return (typeof books !== "undefined" ? 

        <section className="books-container-section">
            <section className="books">
                <Book book={books[0]}/>
                <Book book={books[1]}/>
                <Book book={books[2]}/>
                <Book book={books[3]}/>
                <Book book={books[4]}/>
                <Book book={books[5]}/>
                <Book book={books[6]}/>
                <Book book={books[7]}/>
                <Book book={books[8]}/>
            </section>
        </section>

    : <div>"No books yet"</div>)
}

export default BooksContainer;