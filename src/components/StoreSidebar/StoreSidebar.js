import React, { useContext } from 'react'
import './StoreSidebar.scss';

import StoreContext from '../../context/StoreContext';
import FilterByPrice from './FilterByPrice/FilterByPrice';
import SidebarBookContainer from './SidebarBookContainer/SidebarBookContainer';

const StoreSidebar = () => {
    const context = useContext(StoreContext);

    const topRatedBooks = context.data.works.slice(5, 8);
    const recentBooks = context.data.works.slice(12, 15);

    return (
        <section className="store-sidebar">
            <section className="book-genres">
                <h4 className="sidebar-title">Book Genres</h4>
                <ul>
                    <li><button onClick={() => context.changeCategory('science_fiction')}
                        className="btn-to-link">Science Fiction</button></li>
                    <li><button onClick={() => context.changeCategory('history')} 
                        className="btn-to-link">History</button></li>
                    <li><button onClick={() => context.changeCategory('short_stories')} 
                        className="btn-to-link">Short Stories</button></li>
                    <li><button onClick={() => context.changeCategory('fantasy')} 
                        className="btn-to-link">Fantasy</button></li>
                    <li><button onClick={() => context.changeCategory('biography')} 
                        className="btn-to-link">Biography</button></li>
                    <li><button onClick={() => context.changeCategory('programming')} 
                        className="btn-to-link">Programming</button></li>
                </ul>
            </section>
            <FilterByPrice />
            <SidebarBookContainer bookData={topRatedBooks} title="Top Rated Books"/>
            <SidebarBookContainer bookData={recentBooks} title="Recent Books"/>
        </section>
    )
};

export default StoreSidebar;