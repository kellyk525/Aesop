
import React from 'react';
import AesopProductIndexItem from '../../main/aesop_product_index_item';

class SkinProductsIndex extends React.Component {
    
    render() {

        const { skinProducts, bodyProducts } = this.props
        
        return (   
            <div>
                <div className="main-products" >
                    <div>Skin Products</div>
                    {skinProducts.map((product) => {
                        return <AesopProductIndexItem product={product} key={product.id} />
                    })}
                    <div className="main-skin-product-image"></div>
                </div>
            </div>

        )
    }
}

// export default SkinProductsIndex;