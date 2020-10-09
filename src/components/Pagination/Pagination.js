import React, { useContext } from 'react';
import './Pagination.scss';

import StoreContext from '../../context/StoreContext';
import { Link as ScrollLink } from 'react-scroll';

const Pagination = () => {
    const context = useContext(StoreContext);

    const currentPage = context.state.currentPage;
    const booksPerPage = context.state.booksPerPage;
    const totalBooks = context.currentData.length;
    const pageNumbers = [];

    for(let i = 1; i <= Math.ceil(totalBooks / booksPerPage); i++) {
        pageNumbers.push(i);
    };       

    return (
        <section className="pagination">     
            {pageNumbers.map(number => ( 
                <ScrollLink 
                    to="store-main" 
                    spy={true} 
                    smooth={true} 
                    key={number}
                >
                    <button  
                        disabled={currentPage === number ? true : false}
                        className={`${currentPage === number ? `button active-page` : `button`}`}
                        onClick={() => {context.changeCurrentPage(number)}}
                        aria-label={`page ${number}`}
                    >
                        {number}
                    </button>
                </ScrollLink>
            ))}
        </section>
    );
};

export default Pagination;