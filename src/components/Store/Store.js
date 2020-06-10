import React, { useEffect } from 'react';
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
    let filteredData = data;

    const handleFilterByPrice = (minPrice, maxPrice) => {
        filteredData = data.filter(book => book.price[0] >= minPrice && book.price[1] <= maxPrice);
    };

    let content = (
        <main>
            <PageHeader title="Loading Resources..." color="blue" />
            <section className="loader" />
        </main>);

    if(!isLoading && data) {
        content = (
            <main>
                <PageHeader title={filteredData.name} color="blue" />
                <section className="store-main-container">
                    <BooksContainer bookData={filteredData.works} />
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