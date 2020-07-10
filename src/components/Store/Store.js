import React from 'react';
import './Store.scss';

import BooksContainer from '../BooksContainer/BooksContainer';
import StoreSidebar from '../StoreSidebar/StoreSidebar';
import PageHeader from '../PageHeader/PageHeader';
import Pagination from '../Pagination/Pagination';
import StoreContext from '../../context/StoreContext';

const Store = () => {

    const context = useContext(StoreContext);

    let content = (
        <main>
            <PageHeader title="Loading Resources..." color="blue" />
            <section className="loader" />
        </main>);

    if(!isLoading && data) {
        content = (
            <main>
                <PageHeader title={context.data.name} color="blue" />
                <section className="store-main-container" ref={context.storeMainRef}>
                    <section className="books-container-pagination-wrapper">
                        <BooksContainer bookData={context.currentBooks} />
                        <Pagination 
                            booksPerPage={booksPerPage} 
                            totalBooks={currentData.length}
                            currentPage={currentPage}
                            paginate={paginate} 
                            executeScroll={executeScroll}/>
                    </section>
                    <StoreSidebar 
                        bookData={context.data.works} 
                        ref={filterByPriceRef} 
                        handleFilterByPrice={handleFilterByPrice}
                        handleSetCategoryName={handleSetCategoryName}/>
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