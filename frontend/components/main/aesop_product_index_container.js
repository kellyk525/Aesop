
import { connect } from 'react-redux';
import AesopProductIndex from './aesop_product_index';
import { fetchProducts } from '../../actions/product_actions';
import { allSkinProducts } from '../selectors/skin_selector';
import { allBodyProducts } from '../selectors/body_selector';



const mSTP = (state) => {
    return ({
        skinProducts: allSkinProducts(state),
        bodyProducts: allBodyProducts(state)
    })
}


const mDTP = (dispatch) => ({
    fetchProducts: () => dispatch(fetchProducts())
});

export default connect(mSTP, mDTP)(AesopProductIndex);


// products: Object.values(state.entities.products)