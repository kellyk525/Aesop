

import { connect } from 'react-redux';
import SkinProductsIndex from './skin_products_index';
import { fetchProducts } from '../../../actions/product_actions';
import { allSkinProducts } from '../../selectors/skin_selector';


const mSTP = (state) => ({
    skinProducts: allSkinProducts(state),
    mainCategory: "Skin"
});

const mDTP = (dispatch) => ({
    fetchProducts: () => dispatch(fetchProducts())
});

export default connect(mSTP, mDTP)(SkinProductsIndex);




