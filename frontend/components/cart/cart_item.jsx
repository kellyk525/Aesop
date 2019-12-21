import React from 'react';

class CartItem extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            id: props.cartId,
            product_id: props.productId,
            quantity: props.quantity,
        }
    }

    handleRemoveItem() {
        return (e) => {
            e.preventDefault();
            this.props.deleteCartItem(this.props.cartId)
                .then(console.log("removed"))
        }
    }

    handleQuantity() {
        return (e) => {
            this.setState({ quantity: e.target.value }, () => this.props.updateCartItem(this.state))
        }
    }

    showQuantities() {
        let final = [];
        for (let i = 1; i < 10; i++) {
            final.push(<option value={`${i}`} key={i} >{i}</option>)
        }
        return final;
    }

    render() {
        let { product, quantity } = this.props
        if (!product) return null;

        return (
            <div className="cart-item">
                <div className="single-item"> { product.name }</div>
                <div> { product.size }</div>
                <div className="update">
                    <select id="quantity-in-cart" value={ quantity } onChange={ this.handleQuantity() }>
                        { this.showQuantities() }
                    </select>
                    <div className="remove-cart-item">
                        <button onClick={ this.handleRemoveItem() }>Remove</button>
                    </div>
                </div>
                <div> ${ product.price }.00</div>
                
            </div>
        )
    }
}

export default CartItem;