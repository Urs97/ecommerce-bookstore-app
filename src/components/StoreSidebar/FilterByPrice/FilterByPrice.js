import React, { useState, useRef } from 'react';
import Nouislider from "nouislider-react";
import "nouislider/distribute/nouislider.css";
import './FilterByPrice.scss';

function FilterByPrice({ handleFilterByPrice }, ref) {
    const [minPrice, setMinPrice] = useState(0);
    const [maxPrice, setMaxPrice] = useState(0);
    const filterRef = useRef(null);

    const onChange = () => (render, handle, value, un, percent) => {
        setMinPrice(value[0]);
        setMaxPrice(value[1]);
    }
    
    React.useImperativeHandle(ref, () => ({
        resetFilter() {
            setMinPrice(0);
            setMaxPrice(100);
            if (filterRef.current && filterRef.current.noUiSlider) {
                filterRef.current.noUiSlider.reset();
            }
    }}));

    return (
        <section className="filter-by-price">
            <h4 className="sidebar-title">Filter By Price</h4>
            <Nouislider 
                instanceRef={instance => filterRef.current = instance }
                range={{ min: 0, max: 100 }} 
                start={[0, 100]}
                step={10} 
                connect 
                onUpdate={onChange()}/>
            <div className="filter-by-price-div">
                <button className="button" onClick={() => handleFilterByPrice(minPrice, maxPrice)}>Filter</button>
                <span>${minPrice} - ${maxPrice}</span>
            </div>
        </section>
    )
};

const forwardedFilterByPrice = React.forwardRef(FilterByPrice);

export default forwardedFilterByPrice;