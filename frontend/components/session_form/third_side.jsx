

import React from 'react';
import { Link } from 'react-router-dom';

class ThirdSide extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            product_id: parseInt(props.product.id),
            quantity: 1
        }

        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleSubmit() {
        return () => {
            this.props.createCartItem(this.state)
                .then(console.log("hello"))
        };
    }


    render() {

        return (
            <div className="third-drawer" onClick={e => e.stopPropagation()} >
                <div className="third-drawer-contain" >
                    <div  className="third-contain-main">
                            <div className="third-contain-image">
                                <div className="third-contain-image-center">
                                    <img src={this.props.product.photoUrls[0]} alt="Photo"/>
                                </div>
                            </div>
                            <div className="third-contain-text text-line" >
                                    <Link to={`/products/${this.props.product.name}~${this.props.product.id}`} className="link-product" onClick={this.props.closeSide}>
                                        <p>{this.props.product.name}</p>
                                    </Link>
                                <p>{this.props.product.size}</p>
                            </div>
                        <div className="third-contain-text-second" >
                            <p>{this.props.product.name}</p>
                        </div>
                        <div className="add-to-cart" onClick={ this.handleSubmit() }>
                            <p>Add to your cart  -  ${this.props.product.price}</p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default ThirdSide;