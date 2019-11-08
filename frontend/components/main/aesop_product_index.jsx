
import React from 'react';
import AesopProductIndexItem from './aesop_product_index_item';

class AesopProductIndex extends React.Component {

    componentDidMount() {
        this.props.fetchProducts();
    }


    render() {
        const { skinProducts, bodyProducts  } = this.props
        let categoryAll = []
        skinProducts.forEach((product) => {
            if (!categoryAll.includes(product.category)) {
                categoryAll.push(product.category)
            }
        })

        return (
            <div>
                <div className="splash-1"></div>
                <div className="main-products" >
                    <div>Skin Products</div>
                    {skinProducts.map((product) => {
                        return <AesopProductIndexItem product={product} key={product.id} />
                    })}
                    <div className="main-skin-product-image"></div>
                </div>
                <div className="main-products" >
                    <div>Body Products</div>
                    { bodyProducts.map( (product) => {
                        return <AesopProductIndexItem product={product} key={product.id} />
                    })}
                </div>
                <div className="main-body-product-image"></div>
            </div>
        )
    }
    
}

export default AesopProductIndex;

// {
//     categoryAll.map((category) => {
//         return <div>{category}</div>
//     })
// }