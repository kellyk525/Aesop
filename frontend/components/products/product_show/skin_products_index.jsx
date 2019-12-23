

import React from 'react';
import ProductIndexItem from './product_index_item';
import { Link } from 'react-router-dom';

class SkinProductsIndex extends React.Component {

    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.fetchProducts();
    }

    render() {
        const { skinProducts } = this.props;

        const cleanse = skinProducts.filter((product) => product.sub_category === "Cleanse" )
        const hydrate = skinProducts.filter((product) => product.sub_category === "Hydrate" )
        const treat = skinProducts.filter((product) => product.sub_category === "Treat" )
        const exfoliate = skinProducts.filter((product) => product.sub_category === "Exfoliate" )

        return (
            <div className="all-products" >
                <div className="products-header" id="hello">
                    <Link to="/" className="logo-main">
                        <img src="https://aesop-dev.s3-us-west-1.amazonaws.com/Logo-second.png" alt="Logo" />
                    </Link>
                    <p>Skin</p>
                </div>
                <div className="products" >
                    <div className="products-contain">
                        <div className="products-image">
                            <div className="main-index-item">
                                <div className="product-item-photo">
                                    <div className="photo-contain-first">
                                        <div className="sub" >
                                            <h2>Cleanse</h2>
                                            <p>
                                                Cleansing skin of daily grime, sweat and other impurities forms the foundation of an intelligent skin care regimen.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            { cleanse.map((product) => {
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
                                            <h2>Hydrate</h2>
                                            <p>
                                                Essential for skin’s optimal health and appearance, hydrating replenishes moisture, nourishes, soothes and sustains skin.
                                            </p>
                                        </div>
                                </div>
                                </div>
                            </div>
                            {hydrate.map((product) => {
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
                                            <h2>Treat and Masque</h2>
                                            <p>
                                                Formulated to complement any skin care regimen, high-potency treatments hydrate deeply, rejuvenate and fortify skin.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {treat.map((product) => {
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
                                            <h2>Exfoliate</h2>
                                            <p>
                                                Effective exfoliation liberates skin of grime, excess oil and dead skin cells to reveal soft, fresh and smooth skin.
                                            </p>

                                        </div>
                                    </div>
                                </div>
                            </div>
                            {exfoliate.map((product) => {
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


export default SkinProductsIndex;