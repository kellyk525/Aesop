

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


    addedToCart() {
        let newEl = document.getElementsByClassName("quantity-added-to-basket");
        newEl[0].style.display = "block";
        setTimeout(() => newEl[0].style.display = "none", 2000)
    }

    handleSubmit() {
        return () => {
            this.props.createCartItem(this.state)
                .then(console.log("hello"))
            this.props.closeSide();
            this.addedToCart();
        };
    }

    handleLogin() {
        return (e) => {
            e.preventDefault();
            this.props.closeSide();
            this.props.openModal("login");
        }
    }

    componentDidUpdate(prevProps) {
        if (prevProps.product.id !== this.props.product.id) {
            console.log("Hello this is Kelly")
            this.setState({ product_id: parseInt(this.props.product.id), quantity: 1 }, () => {
                console.log(this.state.product_id)
            })
        }
    }


    render() {

        const { openModal, currentUserId } = this.props;

        console.log("THis is kellyyy")
        console.log(currentUserId);

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
                        <div className="add-to-cart" onClick={ currentUserId ? this.handleSubmit() : this.handleLogin() }>
                            <p>Add to your cart  -  ${this.props.product.price}</p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default ThirdSide;