
import React from 'react';
import AesopProductIndexItem from './aesop_product_index_item';
import { Link } from 'react-router-dom';

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
                        <img className="top-image" src="https://aesop-dev.s3-us-west-1.amazonaws.com/aesop-main-second-test.png" alt="" />
                        <div className="main-text">
                            <div className="main-text-first" >Aesop</div>
                            <div className="main-text-second" >
                                <h2>Begin at the beginning</h2>
                                <div>
                                    Cleansing is a vital starting point to better skin. An effective yet gentle cleanser purifies the skin and readies it for toning and hydration.
                                </div>
                                <div>
                                    <p>Explore Skin Products</p>
                                </div>
                            </div>

                        </div>

                    </div>
                </div>
                <div className="main-products" >
                    <div className="main-products-contain">
                        <p>
                            Of Replenishing Character
                        </p>
                        <div className="main-skin-product-image slide-container">
                            {skinProducts.map((product) => {
                                return <AesopProductIndexItem product={product} key={product.id} />
                            })}
                        </div>
                    </div>
                </div>

                <div className="main-products-third" >
                    <div className="second-text">
                            <div  className="second-text-contain">
                                <div className="contain-again">
                                    <p className="contain-first"></p>
                                    <p>Store Locator</p>
                                    <p className="contain-third" >In each store, trained consultants will be pleased to host you.</p>
                                    <div>
                                        <p>Find a nearby Store</p>
                                    </div>
                                </div>
                            </div>
                    </div>
                    <div className="main-products-contain-third">
                        <div className="main-products-image-third">
                            <div className="image">
                                <img src="https://aesop-dev.s3-us-west-1.amazonaws.com/main-two-again.png" alt="" />
                            </div>
                        </div>
                        <div className="main-third-text">
                            <p>Aesop Tokyo</p>
                        </div>
                    </div>
                </div>
                <div className="main-products" >
                    <div className="main-products-contain">
                        <p>
                            Of Replenishing Character
                        </p>
                        <div className="main-skin-product-image slide-container">
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
                        <div className="email">
                            <p>I would like to receive communications about Aesop products, services, stores, events and matters of cultural interest.</p>
                            <label>
                                <input type="text"/>
                            </label>
                        </div>
                        <div className="contact">
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
                                <ul>
                                    <li><a href="/">Int</a></li>
                                    <li><a href="/"></a></li>
                                    <li><a href="/"></a></li>
                                </ul>
                            </div>
                        </div>

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
