import React from 'react';
import './SidebarBook.scss';

function SidebarBook({ book }) {

    // L is large, M is medium and S is small image format
    const img_url = `http://covers.openlibrary.org/b/olid/${book.cover_edition_key}-L.jpg`;
    const img_alt = `${book.title} book cover`;

    return (
        <section className="sidebar-book">
            <img src={img_url} alt={img_alt} className="sidebar-book-img"/>
            <div className="sidebar-book-details">
                <h4 className="sidebar-book-title-container title">{book.title}</h4>
                <p>{book.authors[0].name}</p>
                <span className="sidebar-book-price-container">${book.price[0]}.{book.price[1]}</span>
            </div>
        </section>
    )
};

export default SidebarBook;
