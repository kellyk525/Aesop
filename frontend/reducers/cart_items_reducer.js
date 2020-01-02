

import { RECEIVE_ALL_CART_ITEMS, REMOVE_CART_ITEM, DELETE_ALL_CART_ITEMS } from '../actions/cart_actions';
import { LOGOUT_CURRENT_USER, RECEIVE_CURRENT_USER } from '../actions/session_actions'; 
import { merge } from 'lodash';


export default (state = {}, action) => {
    Object.freeze(state);
    let newState;

    debugger
    switch (action.type) {
        case RECEIVE_CURRENT_USER:
            if (!action.currentUser.carts) {
                return {};
            } else {
                return action.currentUser.carts;
            }
        case RECEIVE_ALL_CART_ITEMS:
            newState = merge({}, state, action.cartItems);
            return action.cartItems;
        case LOGOUT_CURRENT_USER:
            return {};
        case DELETE_ALL_CART_ITEMS:
            return {};
        case REMOVE_CART_ITEM:
            newState = merge({}. state);
            delete newState[action.cartItemId.id]
        default:
            return state;
    }
}