import React from 'react'
import './StoreSidebar.scss';
import FilterByPrice from './FilterByPrice/FilterByPrice';
import SidebarBookContainer from './SidebarBookContainer/SidebarBookContainer';

function StoreSidebar() {
    return (
        <section className="store-sidebar">
            <section className="book-genres">
                <h4 className="sidebar-title">Book Genres</h4>
                {/* Change li's to something that links, example-button */}
                <ul>
                    <li>Crime</li>
                    <li>Romance</li>
                    <li>Horror</li>
                    <li>Automotive</li>
                    <li>History</li>
                    <li>Politics</li>
                </ul>
            </section>
            <FilterByPrice />
            <SidebarBookContainer title="Top Rated Books"/>
            <SidebarBookContainer title="Recent Books"/>
        </section>
    )
};

export default StoreSidebar;