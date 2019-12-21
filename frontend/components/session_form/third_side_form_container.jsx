

import { connect } from 'react-redux';
import React from 'react';
import { openSide, closeSide } from '../../actions/side_actions';
import { createCartItem } from '../../actions/cart_actions';
import ThirdSide from './third_side';


const mSTP = (state) => {
    return ({
        product: state.entities.products[state.ui.sideProduct]
    });
};

const mDTP = dispatch => {
    return ({
        closeSide: () => dispatch(closeSide()),
        openSide: (side) => dispatch(openSide(side)),
        createCartItem: (cartItem) => dispatch(createCartItem(cartItem))
    });
};

export default connect(mSTP, mDTP)(ThirdSide);
