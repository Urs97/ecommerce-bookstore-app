import React, { useState } from 'react';
import Nouislider from "nouislider-react";
import "nouislider/distribute/nouislider.css";
import './FilterByPrice.scss';

function FilterByPrice() {
    const [minPrice, setMinPrice] = useState(0);
    const [maxPrice, setMaxPrice] = useState(0);

    const onChange = () => (render, handle, value, un, percent) => {
        setMinPrice(value[0]);
        setMaxPrice(value[1]);
    }

    return (
        <section className="filter-by-price">
            <h4 className="sidebar-title">Filter By Price</h4>
            <Nouislider 
                range={{ min: 0, max: 100 }} 
                start={[20, 80]}
                step={10} 
                connect 
                onUpdate={onChange()}/>
            <div className="filter-by-price-div">
                <button className="button">Filter</button>
                <span>{minPrice}-{maxPrice}</span>
            </div>
        </section>
    )
};

export default FilterByPrice;