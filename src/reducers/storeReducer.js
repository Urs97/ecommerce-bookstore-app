export const ACTIONS = {
    CHANGE_CATEGORY : 'CHANGE_CATEGORY',
    CHANGE_CURRENT_PAGE: 'CHANGE_CURRENT_PAGE',
    SUBMIT_FILTER_VALUE: 'SUBMIT_FILTER_VALUE'
}

const changeCategory = (newCategory, prevState) => {
    const newFilterSliderState = prevState.filterSliderState + 1;
    return {...prevState, 
            category: newCategory,
            filterSliderState: newFilterSliderState,
            filteredData: null
        };
}

const changeCurrentPage = (newCurrentPage, prevState) => {
    const newStoreScrollState = prevState.storeScrollState + 1;
    return {...prevState, 
            currentPage: newCurrentPage,
            storeScrollState: newStoreScrollState
    };
}

const submitFilterValue = ({minPrice, maxPrice, data}, prevState) => {
    const newFilteredData = data.works.filter(book => book.price[0] >= minPrice && book.price[0] <= maxPrice);
    return {...prevState,
            filteredData: newFilteredData
    };
}

export const storeReducer = (state, action) => {
    switch (action.type) {
        case ACTIONS.CHANGE_CATEGORY:
            return changeCategory(action.payload, state);
        case ACTIONS.CHANGE_CURRENT_PAGE:
            return changeCurrentPage(action.payload, state);
        case ACTIONS.SUBMIT_FILTER_VALUE:
            return submitFilterValue(action.payload, state);
        default:
            return state;
    }
};
