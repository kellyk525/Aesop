

import {connect} from 'react-redux';
import ProductShow from './product_show';
import { fetchProduct, fetchProducts } from '../../../actions/product_actions';
import { fetchCartItems, createCartItem } from '../../../actions/cart_actions';
import { allSkinProducts } from '../../selectors/skin_selector';
import { openModal } from '../../../actions/modal_actions';


const mSTP = (state, ownProps) => {

    return ({
        product: state.entities.products[ownProps.match.params.productId],
        currentUserId: state.session.id,
        skinProducts: allSkinProducts(state)
    })
}


const mDTP = (dispatch) => {
    return ({
        fetchProduct: (productId) => dispatch(fetchProduct(productId)),
        fetchProducts: () => dispatch(fetchProducts()),
        fetchCartItems: () => dispatch(fetchCartItems()),
        createCartItem: (cartItem) => dispatch(createCartItem(cartItem)),
        openModal: (modal) => dispatch(openModal(modal))
    })    
}


export default connect(mSTP, mDTP)(ProductShow);





