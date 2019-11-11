
import React from 'react';
import AesopProductIndexItem from './aesop_product_index_item';

class AesopProductIndex extends React.Component {

    componentDidMount() {
        this.props.fetchProducts();
    }


    render() {
        const { skinProducts, bodyProducts  } = this.props
        let categoryAll = []

        return (
            <div>
                <div className="main-splash">
                    <div className="splash-1"></div>
                </div>
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

                <div className="slider">
                    <div>Slide #1</div>
                    <div>Slide #2</div>
                    <div>Slide #3</div>
                    <div>Slide #4</div>
                    <div>Slide #5</div>
                </div>
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


        // skinProducts.forEach((product) => {
        //     if (!categoryAll.includes(product.category)) {
        //         categoryAll.push(product.category)
        //     }
        // })