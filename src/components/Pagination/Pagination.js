import React from 'react';

const Pagination = ({ booksPerPage, totalBooks, paginate }) => {
    const pageNumbers = [];

    for(let i = 1; i <= Math.ceil(totalBooks / booksPerPage); i++) {
        pageNumbers.push(i);
    }

    return (
        <section>
            <ul>
                {pageNumbers.map(number => (
                    <li key={number}>
                        <button onClick={() => paginate(number)}>{number}</button>
                    </li>
                ))}
            </ul>
        </section>
    );
};

export default Pagination;