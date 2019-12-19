import React from 'react';
import ProductIndexItem from './product_index_item';
import { Link } from 'react-router-dom';

class BodyProductsIndex extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.fetchProducts();
    }

    render() {
        const { bodyProducts } = this.props;
    
        const body = bodyProducts.filter((product) => product.sub_category === "Body");
        const hand = bodyProducts.filter((product) => product.sub_category === "Hand");

        return(
            <div className="all-products" >
                <div className="products-header" id="hello">
                    <Link to="/" className="logo-main">
                        <img src="https://aesop-dev.s3-us-west-1.amazonaws.com/Logo-second.png" alt="Logo" />
                    </Link>
                    <p>Body</p>
                </div>
                <div className="products" >
                    <div className="products-contain">
                        <div className="products-image">
                            <div className="main-index-item">
                                <div className="product-item-photo">
                                    <div className="photo-contain-first">
                                        <div className="sub" >
                                            <h2>Hand</h2>
                                            <p>
                                                Modest instruments to which we owe our daily comforts, the hands deserve care befitting their unflinching service. Accordingly, consider richly aromatic cleansers and balms that hydrate, nourish and soften.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {hand.map((product) => {
                                return <ProductIndexItem product={product} key={product.id} />
                            })}
                        </div>
                    </div>
                </div>
                <div className="products" >
                    <div className="products-contain">
                        <div className="products-image">
                            <div className="main-index-item">
                                <div className="product-item-photo">
                                    <div className="photo-contain-first">
                                        <div className="sub">
                                            <h2>Body</h2>
                                            <p>
                                                Body cleansers, hydrators and elegant treatment oils enriched with skin-nourishing botanical ingredients ensure clean, soft and smooth skin throughout the seasons.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {body.map((product) => {
                                return <ProductIndexItem product={product} key={product.id} />
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

export default BodyProductsIndex;
