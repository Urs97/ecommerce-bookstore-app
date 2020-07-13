import React, { useContext } from 'react';
import './Pagination.scss';

import StoreContext from '../../context/StoreContext';

const Pagination = () => {
    const context = useContext(StoreContext);

    const currentPage = context.state.currentPage;
    const booksPerPage = context.state.booksPerPage;
    const totalBooks = context.currentData.length;
    const pageNumbers = [];

    console.log(context.currentData.length)

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
                    onClick={() => {context.changeCurrentPage(number)}}>{number}
                </button>
            ))}
        </section>
    );
};

export default Pagination;