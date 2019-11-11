

import { connect } from 'react-redux';
import React from 'react';
import { openSide, closeSide } from '../../actions/side_actions';
import ThirdSide from './third_side';


const mSTP = (state) => {
    debugger
    return ({
        products: state.entities.products
    });
};

const mDTP = dispatch => {
    return ({
        closeSide: () => dispatch(closeSide()),
        openSide: (side) => dispatch(openSide(side))
    });
};

export default connect(mSTP, mDTP)(ThirdSide);
