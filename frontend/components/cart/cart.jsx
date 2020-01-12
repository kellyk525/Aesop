
import React from 'react';
import CartItem from './cart_item';

class Cart extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.fetchProducts()
        this.props.fetchCartItems()
    }
 
    getCartItems() {
        const { cartItems, products } = this.props;
        let item
        if (products) {
            const itemNum = cartItems[1].product_id;
            item = products[itemNum];
        }
    }

    handleCheckout() {
        return (e) => {
            e.preventDefault();
            if (this.props.currentUserId) {
                this.props.deleteAllCartItems(this.props.checkoutItems)
                //     .then(console.log("Checkout"))
                this.props.openModal("checkout");
            }
        }
    }

         
    render() {
        let { currentUserId, cartItems, products, updateCartItem, deleteCartItem } = this.props;

        let productsInCart = <div className="empty-cart" >Your cart is currently empty</div>;
        if (currentUserId) {
            if (cartItems.length === 0) {
                productsInCart = (
                    <div className="empty-cart" >Your cart is currently empty</div>
                )
            } else {
                productsInCart = (
                    cartItems.map((item) => {
                        return (
                            <CartItem
                                product={ products[item.product_id] }
                                productId={ item.productId }
                                cartId={ item.id }
                                key={ item.id }
                                quantity={ item.quantity }
                                updateCartItem={ updateCartItem }
                                deleteCartItem={ deleteCartItem }
                                toggleOpen={ this.props.toggleOpen }
                            />
                        )
                    })
                )
            }
        }

        let totalPrice = 0;
        let totalQuantity = 0;
        cartItems.forEach((item) => {
            if (!products[item.product_id]) return null;
            totalPrice += products[item.product_id].price * item.quantity;
            totalQuantity += item.quantity;
        })

        return(
            <div className="cart">
                <div className="cart-labels">
                    <div className="cart-label-first">Cart</div>
                    <p>Size</p>
                    <div className="cart-label-last">
                        <div>Quantity</div>
                        <div className="x-cart" onClick={this.props.toggleOpen} >X</div>
                    </div>
                </div>
                { productsInCart }
                <div className="cart-bottom">
                    <div className="bottom-first">
                        <div>Complimentary shipping on all orders.</div>
                        <div>Shipping to the United States</div>
                    </div>
                    <div className="bottom-second">
                        <div className="sub-total">
                            <div className="text-sub">Subtotal [Tax Excl.]</div>
                            <div className="total-price" >${ totalPrice }.00</div>
                        </div>
                        <button onClick={ this.handleCheckout() } className="checkout">Checkout</button>
                    </div>
                </div>
            </div>
        )
    }
}

export default Cart;



// let arr = []
// cartItems.map((item) => {
//     console.log("Hello")
//     arr.push(products[item.product_id])
// })

// if (!arr[1]) return null
// { arr[1].name }
