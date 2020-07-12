import React, { useReducer } from 'react';

import StoreContext from '../context/StoreContext';
import { useHttp } from '../hooks/useHttp';
import { ACTIONS, storeReducer } from '../reducers/storeReducer';

const StoreState = props => {

    const initialState = {
        category: 'science-fiction',
        currentPage: 1,
        filterSliderState: 0,
        storeScrollState: 0,
        booksPerPage: 9,
        filteredData: null,
    };

    const [state, dispatch] = useReducer(storeReducer, initialState);
    const url = `http://openlibrary.org/subjects/${state.category}.json?limit=27&offset=0`;
    const [isLoading, data] = useHttp(url, `store_${state.category}_data`, [state.category]);

    // Pagination functionality
    const indexOfLastBook = state.currentPage * state.booksPerPage;
    const indexOfFirstBook = indexOfLastBook - state.booksPerPage;
    let currentData = [];
    let currentBooks = [];

    if (!isLoading && data) {
        currentData = state.filteredData ? state.filteredData : data.works;
        currentBooks = currentData.slice(indexOfFirstBook, indexOfLastBook);
    }

    const changeCategory = newCategory => {
        dispatch({ type: ACTIONS.CHANGE_CATEGORY, payload: newCategory });
    };

    const changeCurrentPage = newCurrentPage => {
        dispatch({ type: ACTIONS.CHANGE_CURRENT_PAGE, payload: newCurrentPage });
    };

    const submitFilterValue = (minPrice, maxPrice, data) => {
        dispatch({ type: ACTIONS.SUBMIT_FILTER_VALUE, 
                payload: { minPrice: minPrice, maxPrice: maxPrice, data: data }})
    }

    return (
        <StoreContext.Provider
            value={{
                state: state,
                isLoading: isLoading,
                data: data,
                currentBooks: currentBooks,
                currentData: currentData,
                changeCategory: changeCategory,
                changeCurrentPage: changeCurrentPage,
                submitFilterValue: submitFilterValue
            }}
        >
          {props.children}
        </StoreContext.Provider>
    );
};

export default StoreState;