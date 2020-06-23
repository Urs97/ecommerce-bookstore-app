import React from 'react';
import './SidebarBookContainer.scss';
import SidebarBook from './SidebarBook/SidebarBook';

const SidebarBookContainer = ({ title, bookData }) => {
    return (
        <section className="sidebar-book-container">
            <h4 className="sidebar-title">{title}</h4>
            <SidebarBook book={bookData[0]}/>
            <SidebarBook book={bookData[1]}/>
            <SidebarBook book={bookData[2]}/>
        </section>
       
    )
};

export default SidebarBookContainer;