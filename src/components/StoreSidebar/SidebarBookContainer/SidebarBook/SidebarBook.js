import React from 'react';
import './SidebarBook.scss';

function SidebarBook() {
    return (
        <section className="sidebar-book">
            <div className="sidebar-book-img"></div>
            <div className="sidebar-book-details">
                <h4 className="title">Book title</h4>
                <p>Book Author</p>
                <span>$20.00</span>
            </div>
        </section>
    )
};

export default SidebarBook;
