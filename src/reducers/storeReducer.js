export const ACTIONS = {
    CHANGE_CATEGORY : 'CHANGE_CATEGORY',
    CHANGE_CURRENT_PAGE: 'CHANGE_CURRENT_PAGE',
    SUBMIT_FILTER_VALUE: 'SUBMIT_FILTER_VALUE',
    TOGGLE_MOBILE_FILTER: 'TOGGLE_MOBILE_FILTER'
}

const changeCategory = (newCategory, prevState) => {
    const newFilterSliderState = !prevState.filterSliderState;
    return {...prevState, 
            category: newCategory,
            filterSliderState: newFilterSliderState,
            filteredData: null,
            currentPage: 1
        };
}

const changeCurrentPage = (newCurrentPage, prevState) => {
    const newStoreScrollState = !prevState.storeScrollState;
    return {...prevState, 
            currentPage: newCurrentPage,
            storeScrollState: newStoreScrollState
    };
}

const submitFilterValue = ({minPrice, maxPrice, data}, prevState) => {
    const newFilteredData = data.works.filter(book => book.price[0] >= minPrice && book.price[0] <= maxPrice);
    return {...prevState,
            filteredData: newFilteredData,
            currentPage: 1
    };
}

const toggleMobileFilter = (state, prevState) => {
    if(state === 'open') return {...prevState, mobileFilterPopup: true}
    if (state === 'close') return {...prevState, mobileFilterPopup: false}
    return;
}

export const storeReducer = (state, action) => {
    switch (action.type) {
        case ACTIONS.CHANGE_CATEGORY:
            return changeCategory(action.payload, state);
        case ACTIONS.CHANGE_CURRENT_PAGE:
            return changeCurrentPage(action.payload, state);
        case ACTIONS.SUBMIT_FILTER_VALUE:
            return submitFilterValue(action.payload, state);
        case ACTIONS.TOGGLE_MOBILE_FILTER:
            return toggleMobileFilter(action.payload, state);
        default:
            return state;
    }
};
