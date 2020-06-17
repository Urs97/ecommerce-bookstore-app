import React from 'react'
import './StoreSidebar.scss';
import FilterByPrice from './FilterByPrice/FilterByPrice';
import SidebarBookContainer from './SidebarBookContainer/SidebarBookContainer';

function StoreSidebar({ handleFilterByPrice, handleSetCategoryName, bookData }, ref) {

    // Shuffle array and then select first 3 books
    const shuffledBookData = bookData.sort(() => 0.5 - Math.random());
    let selectedBookData = shuffledBookData.slice(0, 3);
    // Cache data and change it only on category change! TODO
    // Make brand logo on homepage link to home

    return (
        <section className="store-sidebar">
            <section className="book-genres">
                <h4 className="sidebar-title">Book Genres</h4>
                <ul>
                    <li><button onClick={() => handleSetCategoryName('science_fiction')}
                        className="btn-to-link">Science Fiction</button></li>
                    <li><button onClick={() => handleSetCategoryName('history')} 
                        className="btn-to-link">History</button></li>
                    <li><button onClick={() => handleSetCategoryName('short_stories')} 
                        className="btn-to-link">Short Stories</button></li>
                    <li><button onClick={() => handleSetCategoryName('finance')} 
                        className="btn-to-link">Finance</button></li>
                    <li><button onClick={() => handleSetCategoryName('biography')} 
                        className="btn-to-link">Biography</button></li>
                    <li><button onClick={() => handleSetCategoryName('programming')} 
                        className="btn-to-link">Programming</button></li>
                </ul>
            </section>
            <FilterByPrice ref={ref} handleFilterByPrice={handleFilterByPrice}/>
            <SidebarBookContainer bookData={selectedBookData} title="Top Rated Books"/>
            <SidebarBookContainer bookData={selectedBookData} title="Recent Books"/>
        </section>
    )
};

const forwardedStoreSidebar= React.forwardRef(StoreSidebar);

export default forwardedStoreSidebar;