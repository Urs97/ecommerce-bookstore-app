import React from 'react'
import './StoreSidebar.scss';
import FilterByPrice from './FilterByPrice/FilterByPrice';
import SidebarBookContainer from './SidebarBookContainer/SidebarBookContainer';

function StoreSidebar() {
    return (
        <section className="store-sidebar">
            <section className="book-genres">
                <h4 className="sidebar-title">Book Genres</h4>
                <ul>
                    <li><button className="btn-to-link">Crime</button></li>
                    <li><button className="btn-to-link">Romance</button></li>
                    <li><button className="btn-to-link">Horror</button></li>
                    <li><button className="btn-to-link">Automotive</button></li>
                    <li><button className="btn-to-link">History</button></li>
                    <li><button className="btn-to-link">Politics</button></li>
                </ul>
            </section>
            <FilterByPrice />
            <SidebarBookContainer title="Top Rated Books"/>
            <SidebarBookContainer title="Recent Books"/>
        </section>
    )
};

export default StoreSidebar;