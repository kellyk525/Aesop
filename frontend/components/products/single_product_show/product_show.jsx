
import React from 'react';

class ProductShow extends React.Component {

    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.fetchProduct(this.props.match.params.productId);
    }

    render() {
        debugger
        const { name, description, photoUrls } = this.props.product

        return (
            <div>
                <p>{name}</p>
                <p>{description}</p>
                <img src={photoUrls[0]} alt="Photo"/>
            </div>
        )
    }
}

export default ProductShow;