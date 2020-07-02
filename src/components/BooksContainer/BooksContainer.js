import React from 'react';
import './BooksContainer.scss';
import Book from '../Book/Book';

const BooksContainer = ({ bookData }) => {

    const books = bookData.map(book => <Book key={book.key} book={book}/>);

    // Improve this part
    let content = <div>There are no books.</div>

    if(books.length !== 0) {
        content = (
            <section className="books-container-section">
                <section className="books">
                    {books}
                </section>
            </section>
        );
    };

    return content;
};

export default BooksContainer;