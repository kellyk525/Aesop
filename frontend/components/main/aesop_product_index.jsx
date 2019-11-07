
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
                <div>Skin Products</div>
                { skinProducts.map( (product) => {
                    return <AesopProductIndexItem product={product} key={product.id} />
                })}
                <div>Body Products</div>
                { bodyProducts.map( (product) => {
                    return <AesopProductIndexItem product={product} key={product.id} />
                })}
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