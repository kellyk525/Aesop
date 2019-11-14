

import { connect } from 'react-redux';
import React from 'react';
import { openSide, closeSide, hoverProduct } from '../../actions/side_actions';
import { fetchProducts } from '../../actions/product_actions';
import SecondSide from './second_side';
import { filterProductsByCategory } from '../selectors/selectors';


const mSTP = (state) => {
    return ({
        products: filterProductsByCategory(state, "Skin"), 
    });
};

const mDTP = dispatch => {
    return ({
        fetchProducts: () => dispatch(fetchProducts()),
        closeSide: () => dispatch(closeSide()),
        openSide: (side) => dispatch(openSide(side)),
        hoverProduct: (productId) => dispatch(hoverProduct(productId))
    });
};

export default connect(mSTP, mDTP)(SecondSide);
