
import React from 'react';
import ProductShowDetail from './product_show_detail';
import ProductShowDetailSecond from './product_show_detail_second';
import SkinProductsIndexItem from '../product_show/product_index_item';
import {Link} from 'react-router-dom';
import { withRouter } from 'react-router-dom';

 
class ProductShow extends React.Component {

    constructor(props) {
        super(props);
    }

    componentDidMount() {   
        this.props.fetchProduct(this.props.match.params.productId);
        this.props.fetchProducts();
        if (this.props.currentUser) console.log("kelly")
        if (this.props.currentUser) this.props.fetchCartItems();
        console.log(this.props.match.params.productId)
    }

    render() {
        if (!this.props.product) {
            return null;
        }
        const { photoUrls, size } = this.props.product;
        const { currentUserId, openModal } = this.props;
        

        return (
            <div className="wrap">
                <div className="show-picture-description-wrap">
                    <div className="logo-image-wrap">

                        <Link to="/" className="logo-main">
                            <img src="https://aesop-dev.s3-us-west-1.amazonaws.com/Logo-second.png" alt="Logo" />
                        </Link>
                        <div className="image-and-detail" >
                            <img className="show-image" src={photoUrls[0]} alt="Photo"/>
                            <p>{size}</p>
                        </div>
                    </div>
                    <div className="detail">
                        <ProductShowDetail product={ this.props.product } createCartItem={ this.props.createCartItem } currentUserId={ currentUserId } openModal={ openModal } />
                    </div>
                </div>
                <div>
                    <ProductShowDetailSecond product={ this.props.product } />
                </div>
                <div className="products accomp" >
                    <div className="products-contain">
                        <div className="accompany-image accomp-container">
                            <div className="main-index-item">
                                <div className="product-item-photo">
                                    <div className="photo-contain-first">
                                        <div className="sub" >
                                            <h2>Accompany With</h2>
                                            <div className="main-t" >
                                                 <p>
                                                    Cleansing skin of daily grime,
                                                    <br/>
                                                    sweat and other impurities
                                                    <br/>
                                                     forms the foundation of an
                                                     <br/> intelligent skin care regimen.
                                                 </p>
                                            
                                            </div>
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
                    <div className="email">
                        <p>I would like to receive communications about Aesop products, services, stores, events and matters of cultural interest.</p>
                        <div className="em-input">
                            <label>
                                <input type="text" />
                            </label>
                        </div>
                    </div>
                    <div className="contact">
                        <div>
                            <p>Contact Us</p>
                        </div>
                        <div>
                            <ul>
                                <li><a href="/">Contact Us</a></li>
                                <li><a href="/">FAQs</a></li>
                                <li><a href="/">Delivery and Returns</a></li>
                                <li><a href="/">Terms and Conditions</a></li>
                                <li><a href="/">Track your order</a></li>

                            </ul>
                        </div>
                    </div>
                    <div className="about">
                        <div>
                            <p>About</p>
                        </div>
                        <div>
                            <ul>
                                <li><a href="/">Our Story</a></li>
                                <li><a href="/">Careers</a></li>
                                <li><a href="/">Press</a></li>
                                <li><a href="/">Corporate Gifts</a></li>
                                <li><a href="/">Facial appointments</a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="social">
                        <div>
                            <p>Social</p>
                        </div>
                        <div>
                            <ul>
                                <li><a href="/">Instagram</a></li>
                                <li><a href="/">Twitter</a></li>
                                <li><a href="/">LinkedIn</a></li>
                            </ul>
                        </div>
                    </div>

                </div>
                <div className="footer-actual">
                    <div className="footer-bottom"></div>

                </div>
            </div>
        )
    }
}

export default withRouter(ProductShow);