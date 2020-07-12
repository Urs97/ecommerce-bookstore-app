import React, { useEffect, useRef, useContext } from 'react';
import './Store.scss';

import StoreContext from '../../context/StoreContext';
import BooksContainer from '../BooksContainer/BooksContainer';
import StoreSidebar from '../StoreSidebar/StoreSidebar';
import PageHeader from '../PageHeader/PageHeader';
import Pagination from '../Pagination/Pagination';

const Store = () => {
    const context = useContext(StoreContext);
    const storeMainRef = useRef(null);

    useEffect(() => {
        (context.state.storeScrollState > 0 && 
            window.scrollTo(0, storeMainRef.current.offsetTop));
    }, [context.state.storeScrollState])

    let content = (
        <main>
            <PageHeader title="Loading Resources..." color="blue" />
            <section className="loader" />
        </main>);

    if(!context.isLoading && context.data) {
        content = (
            <main>
                <PageHeader title={context.data.name} color="blue" />
                <section className="store-main-container" ref={storeMainRef}>
                    <section className="books-container-pagination-wrapper">
                        <BooksContainer bookData={context.currentBooks} />
                        <Pagination />
                    </section>
                    <StoreSidebar />
                </section>
            </main>
        )
        
    } else if (!context.isLoading && context.data === null) {
        content = (
            <main>
                <PageHeader title={"Failed to load"} color="blue" />
                <section className="failed-to-load-store">
                    <h3 className="title">Failed to load resources.</h3>
                    <p>Please check your internet connection and reload the page.</p>
                </section>
            </main>
        )
    }
    return content;
};

export default Store;