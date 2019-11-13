
import React from 'react';
import AesopProductIndexItem from './aesop_product_index_item';

class AesopProductIndex extends React.Component {

    componentDidMount() {
        this.props.fetchProducts();
    }

    componentWillUnmount() {
        window.scrollTo(0, 0);
    }
    // This is not working


    render() {
        const { skinProducts, bodyProducts  } = this.props
        let categoryAll = []
    
        return (
            <div>
                <div className="main-products-second" >
                    <div className="main-products-contain-second">
                        <img src="https://aesop-dev.s3-us-west-1.amazonaws.com/aesop-main-second-test.png" alt="" />
                    </div>
                </div>
                <div className="main-products" >
                    <div className="main-products-contain">
                        <p>
                            Of Replenishing Character
                        </p>
                        <div className="main-skin-product-image">
                            {skinProducts.map((product) => {
                                return <AesopProductIndexItem product={product} key={product.id} />
                            })}
                        </div>
                    </div>
                </div>

                <div className="main-products-second" >
                    <div className="main-products-contain-second">
                        <img src="https://aesop-dev.s3-us-west-1.amazonaws.com/aesop-main-second-test.png" alt=""/>
                    </div>
                </div>
                <div className="main-products" >
                    <div className="main-products-contain">
                        <p>
                            Of Replenishing Character
                        </p>
                        <div className="main-skin-product-image">
                            {skinProducts.map((product) => {
                                return <AesopProductIndexItem product={product} key={product.id} />
                            })}
                        </div>
                    </div>
                </div>
                <div className="quote">
                    <div className="quote-contain">
                        <p>‘This world is but canvas to our imaginations.’</p>
                    </div>
                </div>
                <div className="footer">
                    <div className="footer-bottom"></div>
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

//  className="main-splash"
//  className="splash-1"
