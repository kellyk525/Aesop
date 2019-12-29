
import React from 'react';
import { connect } from "react-redux";
import { closeSide, hoverProduct } from "../../actions/side_actions";
import { openSide } from "../../actions/side_actions";
import { fetchProducts } from "../../actions/product_actions";
import SideFormContainer from '../session_form/side_form_container';
import SecondSideFormContainer from '../session_form/second_side_form_container';
import ThirdSideFormContainer from '../session_form/third_side_form_container';
import SecondResultContainer from '../session_form/second_result_container';

class Side extends React.Component {
    constructor(props) {
        super(props);
    }

    updateHoveredProduct (product) {
        this.setState({ hoveredProduct: product })
    }

    componentDidMount() {
        this.props.fetchProducts()
    }

    render() {
    
        const { side, closeSide, openSide, hoverProduct } = this.props
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
                case 'search':
                    component = <SideFormContainer products={ this.props.products } openSide={ openSide } />;
                break;
            case 'result':
                component = <SideFormContainer products={this.props.products} openSide={openSide} />;
                nextComponent = <SecondResultContainer />;
                break;
            default:
                return null;
        }
        return (
            <div className="outsideModal" onClick={ closeSide }>
                {component}
                {nextComponent}
                {thirdComponent}
            </div>
        );
    }

}

const mSTP = (state) => {
    return ({
        side: state.ui.side,
        products: Object.values(state.entities.products)
    });
};

const mDTP = (dispatch) => {
    return ({
        closeSide: () => dispatch(closeSide()),
        fetchProducts: () => dispatch(fetchProducts()),
        openSide: (side) => dispatch(openSide(side))
    });
};

export default connect(mSTP, mDTP)(Side);