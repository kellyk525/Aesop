
import React from 'react';

class Cart extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.fetchProducts();
        this.props.fetchCartItems();
    }

    handleSubmit() {
        
        }
         
    render() {
        const { cartItems, products } = this.props;
        debugger
        let item
        if (products) {
            const itemNum = cartItems[1].product_id;
            item = products[itemNum];
        }

        return(
            <div>
                Hello
                { this.handleSubmit() }
                { item.name }
            </div>
        
        )
    }
}

export default Cart;