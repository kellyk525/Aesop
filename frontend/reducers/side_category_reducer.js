

import { HOVER_CATEGORY } from '../actions/side_actions';

const sideCategoryReducer = (state = null, action) => {
    Object.freeze(state);

    switch (action.type) {
        case HOVER_CATEGORY:
            return action.category;
        default:
            return state;
    }
};

export default sideCategoryReducer;