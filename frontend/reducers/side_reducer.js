

import { OPEN_SIDE, CLOSE_SIDE } from '../actions/side_actions';

const sideReducer = (state = null, action) => {
    Object.freeze(state);

    switch (action.type) {
        case OPEN_SIDE:
            return action.side;
        case CLOSE_SIDE:
            return null;
        default:
            return state;
    }
};

export default sideReducer;



// 1. make another reducer
// 2. mouse over -- api call -- fetch all the products
// 3. mouse out -- clear out the state 

// -- nothing on the state -- undefined 
// -- return null





