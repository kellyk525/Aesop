

import { connect } from 'react-redux';
import BodyProductsIndex from './body_products_index';
import { fetchProducts } from '../../../actions/product_actions';
import { allBodyProducts } from '../../selectors/body_selector';


const mSTP = (state) => {
    
    return ({
        bodyProducts: allBodyProducts(state),
        mainCategory: "Body"
    })
};

const mDTP = (dispatch) => ({
    fetchProducts: () => dispatch(fetchProducts())
});

export default connect(mSTP, mDTP)(BodyProductsIndex);

