
import { CLEAR_ERRORS } from '../actions/session_actions';
import { RECEIVE_ALL_CART_ITEMS, RECEIVE_CART_ITEMS_ERRORS } from '../actions/cart_actions';

export default (state = [], action) => {
    Object.freeze(state);
    switch(action.type) {
        case RECEIVE_ALL_CART_ITEMS:
            return [];
        case RECEIVE_CART_ITEMS_ERRORS:
            return action.errors;
        case CLEAR_ERRORS:
            return [];
        default:
            return state;
    }
};