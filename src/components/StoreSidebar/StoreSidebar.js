import React from 'react'
import './StoreSidebar.scss';
import FilterByPrice from './FilterByPrice/FilterByPrice';

function StoreSidebar() {
    return (
        <section className="store-sidebar">
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
            <FilterByPrice />
        </section>
    )
};

export default StoreSidebar;