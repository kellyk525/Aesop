
import { connect } from 'react-redux';
import ProductShowDetail from './product_show_detail';
import { fetchProduct, fetchProducts } from '../../../actions/product_actions';
import { fetchCartItems, createCartItem } from '../../../actions/cart_actions';

const mSTP = (state, ownProps) => {
    
    return ({
        product: state.entities.products[ownProps.match.params.productId]
    })
}

const mDTP = (dispatch) => {
    return ({
        fetchProduct: (productId) => dispatch(fetchProduct(productId)),
        fetchProducts: () => dispatch(fetchProducts()),
        fetchCartItems: () => dispatch(fetchCartItems()),
        createCartItem: (cartItem) => dispatch(createCartItem(cartItem))
    })
}


export default connect(mSTP, mDTP)(ProductShowDetail);
