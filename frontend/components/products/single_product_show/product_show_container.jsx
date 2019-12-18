

import {connect} from 'react-redux';
import ProductShow from './product_show';
import { fetchProduct, fetchProducts } from '../../../actions/product_actions';
import { allSkinProducts } from '../../selectors/skin_selector';

const mSTP = (state, ownProps) => {

    return ({
        product: state.entities.products[ownProps.match.params.productId],
        skinProducts: allSkinProducts(state)
    })
}


const mDTP = (dispatch) => {
    return ({
        fetchProduct: (productId) => dispatch(fetchProduct(productId)),
        fetchProducts: () => dispatch(fetchProducts())
    })    
}


export default connect(mSTP, mDTP)(ProductShow);





