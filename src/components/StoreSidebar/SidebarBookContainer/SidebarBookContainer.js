import React from 'react';
import './SidebarBookContainer.scss';
import SidebarBook from './SidebarBook/SidebarBook';

function SidebarBookContainer({ title }) {
    return (
        <section className="sidebar-book-container">
            <h4 className="sidebar-title">{title}</h4>
            <SidebarBook />
            <SidebarBook />
            <SidebarBook />
        </section>
       
    )
};

export default SidebarBookContainer;