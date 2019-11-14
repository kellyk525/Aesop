

import { HOVER_PRODUCT } from '../actions/side_actions';

const sideProductReducer = (state = null, action) => {
    Object.freeze(state);

    switch (action.type) {
        case HOVER_PRODUCT:
            return action.productId;
        default:
            return state;
    }
};

export default sideProductReducer;
