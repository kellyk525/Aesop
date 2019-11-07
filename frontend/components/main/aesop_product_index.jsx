
import React from 'react';
import AesopProductIndexItem from './aesop_product_index_item';

class AesopProductIndex extends React.Component {

    componentDidMount() {
        this.props.fetchProducts();
    }

    render() {
        const { products } = this.props

        return (
            <div>
                <div className="splash-1"></div>
                <h1>Products:</h1>
                { products.map( (product) => {
                    return <AesopProductIndexItem product={product} key={product.id} />
                })}
            </div>
        )
    }
    
}

export default AesopProductIndex;