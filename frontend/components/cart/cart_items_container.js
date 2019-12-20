
import { connect } from 'react-redux';
import Cart from './cart.jsx';
import { clearErrors } from '../../actions/session_actions';
import { fetchCartItems, updateCartItem, deleteCartItem, deleteAllCartItems } from '../../actions/cart_actions';
import { fetchProducts } from '../../actions/product_actions';

const mSTP = (state) => ({
    products: state.entities.products,
    currentUserId: state.session.id,
    cartItems: Object.values(state.entities.cartItems),
    errors: state.errors.session
})

const mDTP = (dispatch) => ({
    fetchCartItems: () => dispatch(fetchCartItems()),
    fetchProducts: () => dispatch(fetchProducts()),
    clearErrors: () => dispatch(clearErrors())
})

export default connect(mSTP, mDTP)(Cart);



