
import React from 'react';
import { connect } from "react-redux";
import { closeSide } from "../../actions/side_actions";
import SideFormContainer from '../session_form/side_form_container';
import SecondSideFormContainer from '../session_form/second_side_form_container';
import ThirdSideFormContainer from '../session_form/third_side_form_container';

class Side extends React.Component {
    constructor(props) {
        super(props);
    }

    updateHoveredProduct (product) {
        this.setState({ hoveredProduct: product })
    }

    render() {
    
        const { side, closeSide } = this.props
        if (!side) {
            return null;
        }
        let component
        let nextComponent;
        let thirdComponent;
        
        switch (side) {
            case 'first':
                component = <SideFormContainer />;
                break;
            case 'second':
                component = <SideFormContainer />;
                nextComponent = <SecondSideFormContainer />;
                break;
            case 'third':
                component = <SideFormContainer />;
                nextComponent = <SecondSideFormContainer />;
                thirdComponent = <ThirdSideFormContainer />;
                break;
            default:
                return null;
        }
        return (
            <div className="outsideModal" onClick={closeSide}>
                {component}
                {nextComponent}
                {thirdComponent}
            </div>
        );
    }

}

const mSTP = (state) => {
    return ({
        side: state.ui.side
    });
};

const mDTP = (dispatch) => {
    return ({
        closeSide: () => dispatch(closeSide())
    });
};

export default connect(mSTP, mDTP)(Side);