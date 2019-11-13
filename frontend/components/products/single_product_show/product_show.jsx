
import React from 'react';
import ProductShowDetail from './product_show_detail';
import ProductShowDetailSecond from './product_show_detail_second';
import SkinProductsIndexItem from '../product_show/skin_products_index_item';

class ProductShow extends React.Component {

    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.fetchProduct(this.props.match.params.productId);
        this.props.fetchProducts();
    }

    render() {
        // if (!this.props.photoUrls) {
        //     return null;
        // }

        const { photoUrls, size } = this.props.product
        

        return (
            <div className="wrap">
                <div className="show-picture-description-wrap">
                    <div className="logo-image-wrap">
                        <div className="logo">
                            <p>
                                Aesop
                            </p>
                        </div>
                        <div className="image-and-detail" >
                            <img className="show-image" src={photoUrls[0]} alt="Photo"/>
                            <p>{size}</p>
                        </div>
                    </div>
                    <div className="detail">
                        <ProductShowDetail product={this.props.product} />
                    </div>
                </div>
                <div>
                    <ProductShowDetailSecond product={this.props.product} />
                </div>
                <div className="products" >
                    <div className="products-contain">
                        <div className="products-image">
                            <div className="main-index-item">
                                <div className="product-item-photo">
                                    <div className="photo-contain-first">
                                        <div className="sub" >
                                            <h2>Accompany With</h2>
                                            <p>
                                                Cleansing skin of daily grime, sweat and other impurities forms the foundation of an intelligent skin care regimen.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {this.props.skinProducts.map((product) => {
                                return <SkinProductsIndexItem product={product} key={product.id} />
                            })}
                        </div>
                    </div>
                </div>
                <div className="footer">
                    <div className="footer-bottom"></div>
                </div>
            </div>
        )
    }
}

export default ProductShow;