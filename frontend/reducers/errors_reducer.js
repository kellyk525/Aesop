import { combineReducers } from 'redux';
import sessionErrorsReducer from './session_errors_reducer';
import cartItemsErrorsReducer from './cart_items_errors_reducer'

const errorsReducer = combineReducers({
    session: sessionErrorsReducer,
    cartItems: cartItemsErrorsReducer
});

export default errorsReducer;