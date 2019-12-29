

import React from 'react';
import { Link } from 'react-router-dom';

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

        return (
            <div className="second-drawer" onClick={e => e.stopPropagation()} >
                <div className="second-drawer-contain" >
                    <button className="x-button" onClick={this.props.closeSide}>X</button>

                    {/* <button onClick={() => this.props.openSide("third")} className="register-button" >Register</button> */}
                    <ul className="second-drawer-list">
                        { this.props.products.map((product) => {
                            return (
                                <div className="single-product">
                                    <Link to={`/products/${product.name}~${product.id}`} className="link-product" onClick={this.props.closeSide}>
                                        <li onMouseEnter={this.handleMouseEnter(product.id)}>
                                            <p>{product.name}</p>
                                            <p>{product.size} / ${product.price}</p>
                                        </li>
                                    </Link>
                                </div>
                            )
                        })}
                    </ul>
                </div>
            </div>
        )
    }
}

export default SecondSide;