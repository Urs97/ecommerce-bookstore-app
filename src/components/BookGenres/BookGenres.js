import React, { useContext } from 'react';
import './BookGenres.scss';

import StoreContext from '../../context/StoreContext';

const BookGenres = () => {
    const context = useContext(StoreContext);
    
    return (
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
    )
}

export default BookGenres;