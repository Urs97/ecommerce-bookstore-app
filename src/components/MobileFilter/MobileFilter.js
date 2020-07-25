import React, { useContext } from 'react';
import './MobileFilter.scss';

import StoreContext from '../../context/StoreContext';
import BookGenres from '../BookGenres/BookGenres';
import FilterByPrice from '../FilterByPrice/FilterByPrice';

const MobileFilter = () => {
    const context = useContext(StoreContext);
    const isOpen = context.state.mobileFilterPopup;

    return (
        <section className={`mobile-filter ${isOpen ? `` : `mobile-filter-closed`}`}>
            <button 
                className="button mobile-filter-close" 
                onClick={() => context.toggleMobileFilter('close')}
            >Close</button>
            <BookGenres />
            <FilterByPrice />
        </section>
    )
}

export default MobileFilter;