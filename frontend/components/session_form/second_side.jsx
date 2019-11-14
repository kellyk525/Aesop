

import React from 'react';
import { openSide } from '../../actions/side_actions';

class SecondSide extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            hoverProduct: null
        }
    }

    handleSubmit(e) {
        return (e) => {
            e.preventDefault();
            this.props.closeSide;
        };
    }

    handleMouseEnter(productId) {
        return (e) => {
            e.preventDefault();
            this.props.hoverProduct(productId);
            this.props.openSide("third");
        }
    }

    componentDidMount () {
        this.props.fetchProducts();
    }

    render() {

        const { category } = this.props

        return (
            <div className="second-drawer" onClick={e => e.stopPropagation()} >
                <div className="second-drawer-contain" >
                    <button className="x-button" onClick={this.props.closeSide}>X</button>
                    { category }
                    {/* <button onClick={() => this.props.openSide("third")} className="register-button" >Register</button> */}
                    { this.props.products.map((product) => {
                        return (
                            <div onMouseEnter={this.handleMouseEnter(product.id)} >{product.name}</div>
                        )
                    })}

                </div>
            </div>
        )
    }
}

export default SecondSide;