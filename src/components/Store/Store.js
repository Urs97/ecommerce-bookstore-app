import React, { useContext } from 'react';
import './Store.scss';

import StoreContext from '../../context/StoreContext';
import { Element as ScrollElement } from 'react-scroll';

import BooksContainer from '../BooksContainer/BooksContainer';
import StoreSidebar from '../StoreSidebar/StoreSidebar';
import PageHeader from '../PageHeader/PageHeader';
import Pagination from '../Pagination/Pagination';
import MobileStoreFunctionality from '../MobileStoreFunctionality/MobileStoreFunctionality';

const Store = () => {
    const context = useContext(StoreContext);

    let content = (
        <main>
            <PageHeader 
                title="Loading Resources..." 
                color={"blue"} 
            />
            <section className="loader" />
        </main>
    );

    if(!context.isLoading && context.data) {
        const page_books = context.currentBooks;

        content = (
            <main>
                <PageHeader 
                    title={context.data.name} 
                    color={"blue"} 
                />
                <ScrollElement 
                    className="store-main-container" 
                    name="store-main"
                >
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
                <PageHeader 
                    title={"404 - Failed to load"} 
                    color="blue" 
                />
                <section className="failed-to-load-store">
                    <h3 className="title">404 - Failed to load resources.</h3>
                    <p>Please check your internet connection and reload the page.</p>
                </section>
            </main>
        )
    }
    return content;
};

export default Store;