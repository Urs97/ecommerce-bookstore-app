export const ACTIONS = {
    FILTER_SLIDER_RESET : 'FILTER_SLIDER_RESET',
}

const filterSliderReset = (prevState) => {
    return !prevState;
};

export const filterSliderReducer = (state, action) => {
    switch (action.type) {
        case ACTIONS.FILTER_SLIDER_RESET:
            return filterSliderReset(state);
        default:
            return state;
    }
};