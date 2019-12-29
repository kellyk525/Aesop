
import { connect } from 'react-redux';
import SearchProducts from './search_products.jsx';
import { fetchProducts } from '../../actions/product_actions';
import { hoverProduct, openSide } from '../../actions/side_actions'

const mSTP = (state) => {
    return ({
        products: Object.values(state.entities.products)
    })
}

const mDTP = (dispatch) => ({
    fetchProducts: () => dispatch(fetchProducts()),
    hoverProduct: (productId) => dispatch(hoverProduct(productId)),
    openSide: (side) => dispatch(openSide(side))
})

export default connect(mSTP, mDTP)(SearchProducts);

