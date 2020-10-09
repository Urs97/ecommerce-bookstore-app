import React, { useState, useEffect, useRef, useContext } from 'react';
import "nouislider/distribute/nouislider.css";
import './FilterByPrice.scss';

import StoreContext from '../../context/StoreContext';
import Nouislider from "nouislider-react";

const FilterByPrice = () => {

    const context = useContext(StoreContext);
    
    const [minPrice, setMinPrice] = useState(0);
    const [maxPrice, setMaxPrice] = useState(0);
    const filterRef = useRef(null);
    const data = context.data;

    useEffect(() => {
        if (minPrice !== 0 || maxPrice !== 100) {
            if (filterRef.current && filterRef.current.noUiSlider) {
                filterRef.current.noUiSlider.reset();
            }
        }
    // eslint-disable-next-line
    }, [context.state.filterSliderState])

    const onChange = () => (render, handle, value, un, percent) => {
        setMinPrice(value[0]);
        setMaxPrice(value[1]);
    }

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
                <button 
                    className="button" 
                    onClick={() => context.submitFilterValue(minPrice, maxPrice, data)}
                >
                    Filter
                </button>
                <span>${minPrice} - ${maxPrice}</span>
            </div>
        </section>
    )
};

export default FilterByPrice;