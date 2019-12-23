

import { connect } from 'react-redux';
import AllProductsIndex from './all_products_index';
import { fetchProducts } from '../../../actions/product_actions';
import { allBodyProducts } from '../../selectors/body_selector';


const mSTP = (state) => {

    return ({
        products: Object.values(state.entities.products)
    })
};

const mDTP = (dispatch) => ({
    fetchProducts: () => dispatch(fetchProducts())
});

export default connect(mSTP, mDTP)(AllProductsIndex);
