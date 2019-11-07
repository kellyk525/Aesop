
import { connect } from 'react-redux';
import AesopProductIndex from './aesop_product_index';
import { fetchProducts } from '../../actions/product_actions';


const mSTP = (state) => ({
    products: Object.values(state.entities.products)
});

const mDTP = (dispatch) => ({
    fetchProducts: () => dispatch(fetchProducts())
});

export default connect(mSTP, mDTP)(AesopProductIndex);


