
import React from 'react';
import { Link } from 'react-router-dom';

class ResultSide extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            product_id: parseInt(props.product.id),
            quantity: 1
        }

        this.handleCart = this.handleCart.bind(this)

    }

    handleSubmit(e) {
        return (e) => {
            e.preventDefault();
            this.props.closeSide;
        };
    }

    handleCart() {
        return () => {
            this.props.createCartItem(this.state)
                .then(console.log("Item in Cart"))
        };
    }

    componentDidMount() {
        this.props.fetchProducts();
    }

    render() {

        const { product } = this.props;

        if (!product) return null;

        let result;
        if (product) {
            result = <div>{product.name}</div>
        } else {
            result = console.log("Kelly")
        }


        return (
            <div className="third-drawer" onClick={e => e.stopPropagation()} >
                <div className="result-drawer-contain" >
                    <button className="x-button" onClick={this.props.closeSide}>X</button>
                    <div className="third-contain-main">
                        <div className="third-contain-image">
                            <div className="third-contain-image-center">
                                <img src={ product.photoUrls[0] } alt="Photo" />
                            </div>
                        </div>
                        <div className="third-contain-text text-line" >
                            <Link to={`/products/${product.name}~${product.id}`} className="link-product" onClick={this.props.closeSide}>
                                <p>{product.name}</p>
                            </Link>
                            <p>{product.size}</p>
                        </div>
                        <div className="third-contain-text-second" >
                            <p>{product.name}</p>
                        </div>
                        <div className="add-to-cart" onClick={this.handleCart()}>
                            <p>Add to your cart  -  ${product.price}</p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default ResultSide;