
import React from 'react';
import ProductShowDetail from './product_show_detail';
import ProductShowDetailSecond from './product_show_detail_second';

class ProductShow extends React.Component {

    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.fetchProduct(this.props.match.params.productId);
        console.log(this.props)
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
            </div>
        )
    }
}

export default ProductShow;