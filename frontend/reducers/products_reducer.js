
import { RECEIVE_PRODUCTS, RECEIVE_ONE_PRODUCT } from '../actions/product_actions';


const productsReducer = ( state = {}, action ) => {
    Object.freeze(state);
    let newState = Object.assign({}, state)

    switch(action.type) {
        case RECEIVE_PRODUCTS:
            return action.products;
        case RECEIVE_ONE_PRODUCT:
            newState[action.product.id] = action.product
            return newState;
        default:
            return state;
    }
};

export default productsReducer;