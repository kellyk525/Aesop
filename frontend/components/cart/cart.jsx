
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

    handleSubmit() {
        
    }
 
    getCartItems() {
        const { cartItems, products } = this.props;
        debugger
        let item
        if (products) {
            const itemNum = cartItems[1].product_id;
            item = products[itemNum];
        }
    }
         
    render() {
        let { currentUserId, cartItems, products, updateCartItem, deleteCartItem } = this.props;

        let productsInCart;
        if (currentUserId) {
            if (cartItems.length === 0) {
                productsInCart = (
                    <div>Your cart is currently empty</div>
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
                            />
                        )
                    })
                )
            }
        }

        return(
            <div>
                Hello
                { this.handleSubmit() }
                { productsInCart }
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
