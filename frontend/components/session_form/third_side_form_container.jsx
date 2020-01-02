

import { connect } from 'react-redux';
import React from 'react';
import { openSide, closeSide } from '../../actions/side_actions';
import { createCartItem } from '../../actions/cart_actions';
import { openModal } from '../../actions/modal_actions';
import ThirdSide from './third_side';

const mSTP = (state) => {
    return ({
        product: state.entities.products[state.ui.sideProduct],
        currentUserId: state.session.id
    });
};

const mDTP = dispatch => {
    return ({
        closeSide: () => dispatch(closeSide()),
        openSide: (side) => dispatch(openSide(side)),
        createCartItem: (cartItem) => dispatch(createCartItem(cartItem)),
        openModal: (modal) => dispatch(openModal(modal)),
    });
};

export default connect(mSTP, mDTP)(ThirdSide);
