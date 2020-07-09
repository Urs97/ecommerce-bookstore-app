import React from 'react';
import './Pagination.scss';

const Pagination = ({ booksPerPage, totalBooks, paginate, executeScroll, currentPage }) => {

    const pageNumbers = [];

    for(let i = 1; i <= Math.ceil(totalBooks / booksPerPage); i++) {
        pageNumbers.push(i);
    };       

    return (
        <section className="pagination">     
            {pageNumbers.map(number => ( 
                <button 
                    key={number} 
                    disabled={currentPage === number ? true : false}
                    className={`${currentPage === number ? `button active-page` : `button`}`}
                    onClick={() => {paginate(number); executeScroll()}}>{number}
                </button>
            ))}
        </section>
    );
};

export default Pagination;