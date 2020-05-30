import React, { useState } from 'react';
import './FilterByPrice.scss';

function FilterByPrice() {
    const [value, setValue] = useState(0);
    const handleOnChange = (e) => setValue(e.target.value); 

    return (
        <section className="filter-by-price">
            <h4 className="sidebar-title">Filter By Price</h4>
            <input type="range" min={0} max={100} step={5} value={value} onChange={handleOnChange} />
            <div>
                <button className="button">Filter</button>
                <span>{value}</span>
            </div>
        </section>
    )
};

export default FilterByPrice;
