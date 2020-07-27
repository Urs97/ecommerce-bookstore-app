import React, { useContext } from 'react';
import './Store.scss';

import StoreContext from '../../context/StoreContext';
import BooksContainer from '../BooksContainer/BooksContainer';
import StoreSidebar from '../StoreSidebar/StoreSidebar';
import PageHeader from '../PageHeader/PageHeader';
import Pagination from '../Pagination/Pagination';
import MobileStoreFunctionality from '../MobileStoreFunctionality/MobileStoreFunctionality';
import { Element as ScrollElement } from 'react-scroll';

const Store = () => {
    const context = useContext(StoreContext);
    const isLoading = context.isLoading;
    const data = context.data;

    let content = (
        <main>
            <PageHeader title="Loading Resources..." color="blue" />
            <section className="loader" />
        </main>
    );

    if(!isLoading && data) {
        const page_books = context.currentBooks;

        content = (
            <main>
                <PageHeader title={data.name} color="blue" />
                <ScrollElement className="store-main-container" name="store-main">
                    <MobileStoreFunctionality />
                    <BooksContainer bookData={page_books} />
                    <Pagination />
                    <StoreSidebar />
                </ScrollElement>
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