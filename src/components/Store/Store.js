import React, { useEffect } from 'react';
import './Store.scss';
import BooksContainer from '../BooksContainer/BooksContainer';
import StoreSidebar from '../StoreSidebar/StoreSidebar';

function Store() {

    useEffect(() => {
        window.scrollTo(0, 0);
      }, [])

    return (
        <>
            <section className="store-nav-container"></section>
            <section className="store-category-title">
                <h1 className="title">Detective Novels</h1>
            </section>
            <main className="store-main-container">
                <BooksContainer />
                <StoreSidebar />
            </main>
        </>
    )
};

export default Store;