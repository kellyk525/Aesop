import { combineReducers } from 'redux';
import modal from './modal_reducer';
import side from './side_reducer';
import sideProduct from './side_product_reducer';
import sideCategory from './side_category_reducer';

export default combineReducers({
    modal,
    side,
    sideProduct,
    sideCategory
});