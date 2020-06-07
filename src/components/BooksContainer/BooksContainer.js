import React from 'react';
import './BooksContainer.scss';
import Book from '../Book/Book';
import { uuid }  from 'uuidv4';

function BooksContainer({ bookData }) {

    const books = bookData.map(book => <Book key={uuid()} book={book}/>);

    return (
        <section className="books-container-section">
            <section className="books">
                {books}
            </section>
        </section>
    );
};

export default BooksContainer;