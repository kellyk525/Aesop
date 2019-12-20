
import React from 'react';

class Cart extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.fetchProducts();
    }

    render() {
        return(
            <div>
                Hello
            </div>
        )
    }
}

export default Cart;