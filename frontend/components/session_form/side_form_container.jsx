

import { connect } from 'react-redux';
import React from 'react';
import { openSide, closeSide, hoverCategory } from '../../actions/side_actions';
import FirstSide from './first_side';
import { filterProductsByCategory } from '../selectors/selectors';
 


const mSTP = (state) => {
    
    return ({
        skinCategory: filterProductsByCategory(state, "Skin"),
        bodyCategory: filterProductsByCategory(state, "bodyandhand")
    });
};

const mDTP = dispatch => {
    return ({
        closeSide: () => dispatch(closeSide()),
        openSide: (side) => dispatch(openSide(side)),
        hoverCategory: (category) => dispatch(hoverCategory(category))
    });
};

export default connect(mSTP, mDTP)(FirstSide);

