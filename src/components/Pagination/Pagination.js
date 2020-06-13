import React from 'react';
import './Pagination.scss';

const Pagination = ({ booksPerPage, totalBooks, paginate }) => {
    const pageNumbers = [];

    for(let i = 1; i <= Math.ceil(totalBooks / booksPerPage); i++) {
        pageNumbers.push(i);
    };       

    return (
        <section className="pagination">     
            {pageNumbers.map(number => ( 
                <button key={number} className="button" onClick={() => paginate(number)}>{number}</button>
            ))}
        </section>
    );
};

export default Pagination;