import React, { useEffect, useReducer } from 'react';

import StoreContext from '../context/StoreContext';
import { ACTIONS, filterSliderReducer } from '../reducers/storeReducer';

const StoreState = props => {
    const [filterSliderState, dispatch] = useReducer(filterSliderReducer, false);

    const filterSliderReset = () => {
        dispatch({ type: ACTIONS.FILTER_SLIDER_RESET });
    };

    return (
        <StoreContext.Provider
            value={{
                filterSliderState: filterSliderState,
                filterSliderReset: filterSliderReset,
            }}
        >
          {props.children}
        </StoreContext.Provider>
    );
};

export default StoreState;