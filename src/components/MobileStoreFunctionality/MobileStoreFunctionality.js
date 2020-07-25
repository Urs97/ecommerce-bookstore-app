import React, { useContext } from 'react';
import './MobileStoreFunctionality.scss';

import StoreContext from '../../context/StoreContext';
import MobileFilter from '../MobileFilter/MobileFilter';

const MobileStoreFunctionality = () => {
    const context = useContext(StoreContext);
    const total_books = context.currentData;

    return (
        <section className="mobile-store-functionality">
            <span>{total_books.length} products</span>
            <button 
                className="button mobile-filter-open" 
                onClick={() => context.toggleMobileFilter('open')}
            >Filter</button>
            <MobileFilter />
        </section>
    )
};

export default MobileStoreFunctionality;