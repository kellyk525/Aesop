

import React from 'react';
import {Link} from 'react-router-dom';

class ProductIndexItem extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        const { name, size, price, photoUrls, id } = this.props.product
        debugger
        if (!photoUrls[0]) return null;

        return (
            <div>
                { console.log(name) }
                <div className="product-index-item">
                    <Link to={`/products/${name}~${id}`} className="link-product">
                        <div className="product-item-photo">
                            <div className="product-contain">
                                <img src={photoUrls[0]} alt="Photo" />
                                <div className="text">
                                    <h1>{name}</h1>
                                    <p>{size}/{price}</p>
                                </div>
                            </div>
                        </div>
                    </Link>
                </div>
            </div>
        )
    }
}

export default ProductIndexItem;