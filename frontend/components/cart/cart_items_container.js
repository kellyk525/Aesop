
import { connect } from 'react-redux';
import Cart from './cart.jsx';
import { clearErrors } from '../../actions/session_actions';
import { fetchCartItems, updateCartItem, deleteCartItem, deleteAllCartItems } from '../../actions/cart_actions';
import { fetchProducts } from '../../actions/product_actions';
import { openModal } from '../../actions/modal_actions';

const mSTP = (state) => {
    return ({
        products: state.entities.products,
        currentUserId: state.session.id,
        cartItems: Object.values(state.entities.cartItems),
        checkoutItems: state.entities.cartItems,
        errors: state.errors.session
    })
}

const mDTP = (dispatch) => ({
    fetchCartItems: () => dispatch(fetchCartItems()),
    fetchProducts: () => dispatch(fetchProducts()),
    clearErrors: () => dispatch(clearErrors()),
    updateCartItem: (cartItem) => dispatch(updateCartItem(cartItem)),
    deleteCartItem: (id) => dispatch(deleteCartItem(id)),
    deleteAllCartItems: () => dispatch(deleteAllCartItems()),
    openModal: (side) => dispatch(openModal(side))
})

export default connect(mSTP, mDTP)(Cart);



