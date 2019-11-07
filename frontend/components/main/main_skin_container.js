

import { connect } from 'react-redux';
import AesopProductIndex from './aesop_product_index';
import { fetchProducts } from '../../actions/product_actions';
import { allSkinProducts } from '../selectors/skin_selector';


const mSTP = (state) => ({
    skinProducts: allSkinProducts(state),
    mainCategory: "skincare"
});

const mDTP = (dispatch) => ({
    fetchProducts: () => dispatch(fetchProducts())
});

export default connect(mSTP, mDTP)(AesopProductIndex);

