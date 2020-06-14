import React, { useState, useEffect, useRef } from 'react';
import './Store.scss';
import BooksContainer from '../BooksContainer/BooksContainer';
import StoreSidebar from '../StoreSidebar/StoreSidebar';
import PageHeader from '../PageHeader/PageHeader';
import { useHttp } from '../../hooks/useHttp';
import Pagination from '../Pagination/Pagination';

function Store() {
    const url = `http://openlibrary.org/subjects/science_fiction.json?limit=27&offset=0`;
    const [isLoading, data] = useHttp(url, 'storeApiData', []);
    const [filteredData, setFilteredData] = useState(null);
    const [currentPage, setCurrentPage] = useState(1);
    const booksPerPage = 9;
    const booksContainerRef = useRef(null);

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    // Filter By Price
    const handleFilterByPrice = (minPrice, maxPrice) => {
        setFilteredData(data.works.filter(book => book.price[0] >= minPrice && book.price[0] <= maxPrice));
        setCurrentPage(1);
    };

    // Scroll to ref element
    const scrollToRef = (ref) => window.scrollTo(0, ref.current.offsetTop);
    const executeScroll = () => scrollToRef(booksContainerRef);

    // Change Page
    const paginate = (pageNumber) => setCurrentPage(pageNumber);

    let content = (
        <main>
            <PageHeader title="Loading Resources..." color="blue" />
            <section className="loader" />
        </main>);

    if(!isLoading && data) {
        
        // Pagination functionality
        const indexOfLastBook = currentPage * booksPerPage;
        const indexOfFirstBook = indexOfLastBook - booksPerPage;
        const currentData = filteredData ? filteredData : data.works;
        const currentBooks = currentData.slice(indexOfFirstBook, indexOfLastBook);

        content = (
            <main>
                <PageHeader title={data.name} color="blue" />
                <section className="store-main-container" ref={booksContainerRef}>
                    <section className="books-container-pagination-wrapper">
                        <BooksContainer bookData={currentBooks} />
                        <Pagination booksPerPage={booksPerPage} totalBooks={currentData.length} 
                            paginate={paginate} executeScroll={executeScroll}/>
                    </section>
                    <StoreSidebar handleFilterByPrice={handleFilterByPrice}/>
                </section>
            </main>
        )
    // This part doesnt work come back to it later
    } else if (!isLoading && !data) {
        content = (
            <main>
                <PageHeader title={"Failed to load resources"} color="blue" />
                <section>Failed to load.</section>
            </main>
        )
    }
    return content;
};

export default Store;