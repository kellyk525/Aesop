
import { connect } from 'react-redux';
import { openSide, closeSide, hoverProduct } from '../../actions/side_actions';
import { fetchProducts } from '../../actions/product_actions';
import { createCartItem } from '../../actions/cart_actions';
import ResultSide from './result_side';


const mSTP = (state) => {

    return ({
        product: state.entities.products[state.ui.sideProduct]
    });
};


const mDTP = dispatch => {
    return ({
        fetchProducts: () => dispatch(fetchProducts()),
        closeSide: () => dispatch(closeSide()),
        hoverProduct: (productId) => dispatch(hoverProduct(productId)),
        createCartItem: (cartItem) => dispatch(createCartItem(cartItem))
    });
};

export default connect(mSTP, mDTP)(ResultSide);
