import React, { useState, useEffect } from 'react';
import './Store.scss';
import BooksContainer from '../BooksContainer/BooksContainer';
import StoreSidebar from '../StoreSidebar/StoreSidebar';
import PageHeader from '../PageHeader/PageHeader';
import { useHttp } from '../../hooks/useHttp';

function Store() {

    useEffect(() => {
        window.scrollTo(0, 0)
      }, [])

    const url = `http://openlibrary.org/subjects/science_fiction.json?limit=27&offset=0`;
    const [isLoading, data] = useHttp(url, 'storeApiData', []);
    const [filteredData, setFilteredData] = useState(null);

    const handleFilterByPrice = (minPrice, maxPrice) => {
        setFilteredData(data.works.filter(book => book.price[0] >= minPrice && book.price[0] <= maxPrice));
    };

    let content = (
        <main>
            <PageHeader title="Loading Resources..." color="blue" />
            <section className="loader" />
        </main>);

    if(!isLoading && data) {
        content = (
            <main>
                <PageHeader title={data.name} color="blue" />
                <section className="store-main-container">
                    <BooksContainer bookData={filteredData ? filteredData : data.works} />
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