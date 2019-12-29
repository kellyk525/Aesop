import React from 'react';
import { Link } from 'react-router-dom';

class SearchProductItem extends React.Component {
    constructor(props) {
        super(props);
    }

    handleMouseEnter(productId) {
        return (e) => {
            e.preventDefault();
            this.props.hoverProduct(productId);
            this.props.openSide("result");
        }
    }

    render() {
        const { product } = this.props;
        if (!product) return null;

        return(
            <div>
                <Link to={`/products/${product.name}~${product.id}`}>
                    <li onMouseEnter={this.handleMouseEnter(product.id)}>
                        <p>
                            { product.name }
                        </p>
                    </li>
                </Link>
            </div>
        )
    }
}

export default SearchProductItem;

// <div className="single-product">
//     <Link to={`/products/${product.name}~${product.id}`} className="link-product" onClick={this.props.closeSide}>
//         <li onMouseEnter={this.handleMouseEnter(product.id)}>
//             <p>{product.name}</p>
//             <p>{product.size} / ${product.price}</p>
//         </li>
//     </Link>
// </div>
