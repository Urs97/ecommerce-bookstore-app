import React, { useContext } from 'react'
import './StoreSidebar.scss';

import StoreContext from '../../context/StoreContext';

import BookGenres from '../BookGenres/BookGenres';
import FilterByPrice from '../FilterByPrice/FilterByPrice';
import SidebarBookContainer from './SidebarBookContainer/SidebarBookContainer';

const StoreSidebar = () => {
    const context = useContext(StoreContext);

    const topRatedBooks = context.data.works.slice(5, 8);
    const recentBooks = context.data.works.slice(12, 15);

    return (
        <section className="store-sidebar">
            <BookGenres />
            <FilterByPrice />
            <SidebarBookContainer bookData={topRatedBooks} title="Top Rated Books"/>
            <SidebarBookContainer bookData={recentBooks} title="Recent Books"/>
        </section>
    )
};

export default StoreSidebar;