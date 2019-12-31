

import React from 'react';
import ProductIndexItem from './product_index_item';
import { Link } from 'react-router-dom';

class SkinProductsIndex extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            filter: "all",
            type: "all",
            first: false,
            open: false,
            filter: false
        }
    }

    componentDidMount() {
        this.props.fetchProducts();
    }

    componentWillUnmount() {
        window.scrollTo(0, 0);
    }

    toggleOpen() {
        return (e) => {
            e.preventDefault();
            this.setState({ filter: !this.state.filter });
        }
    }

    getFilteredProducts(products) {
        let final = products;

        if (this.state.filter !== "all" && this.state.type !== "all" && this.state.open && this.state.first) {
            final = products.filter((product) => product.sub_category === this.state.filter && product.skin_type === this.state.type)
        }

        if (this.state.filter !== "all" && this.state.type !== "all" && this.state.open && !this.state.first) {
            final = products.filter((product) => product.skin_type === this.state.type)
        }

        if (this.state.filter !== "all" && this.state.type !== "all" && this.state.open && this.state.first) {
            final = products.filter((product) => product.sub_category === this.state.filter && product.skin_type === this.state.type)
        }

        if (this.state.filter !== "all" && this.state.type !== "all" && !this.state.open && this.state.first) {
            final = products.filter((product) => product.sub_category === this.state.filter)
        }

        if (this.state.filter === "all" && this.state.type !== "all" && this.state.open && !this.state.first) {
            final = products.filter((product) => product.skin_type === this.state.type)
        }

        if (this.state.filter !== "all" && this.state.type === "all" && !this.state.open && this.state.first) {
            final = products.filter((product) => product.sub_category === this.state.filter)
        }

        console.log(final);
        console.log(this.state.first)
        console.log(this.state.open)
        return final;

    }

    filter(field) {
        return (e) => {
            e.preventDefault();
            this.setState({ filter: field })
            this.setState({ first: !this.state.first })
        }
    }

    filterType(field) {
        return (e) => {
            e.preventDefault();
            this.setState({ type: field })
            this.setState({ open: !this.state.open })
        }
    }

    openAll() {
        return (e) => {
            e.preventDefault();
            this.setState({ type: "all" })
            this.setState({ filter: "all" })
            this.setState({ first: false })
            this.setState({ open: false })
        }
    }

    render() {
        let allSkinProducts = this.props.skinProducts;

        if (!allSkinProducts) return null;

        let products = this.getFilteredProducts(allSkinProducts);


        let cleanse = products.filter((product) => product.sub_category === "Cleanse")
        let hydrate = products.filter((product) => product.sub_category === "Hydrate")
        let treat = products.filter((product) => product.sub_category === "Treat")
        let exfoliate = products.filter((product) => product.sub_category === "Exfoliate")


        let categoryList = [];
        allSkinProducts.forEach((product) => {
            if (!categoryList.includes(product.sub_category)) {
                categoryList.push(product.sub_category)
            }
        })

        let categories = categoryList.map((category, i) => {
            return (<div onClick={this.filter(category)} key={category} className="all-index-category" >{category}</div>)
        })

        let skinTypeList = [];
        allSkinProducts.forEach((product) => {
            if (!skinTypeList.includes(product.skin_type)) {
                skinTypeList.push(product.skin_type)
            }
        })

        let skin_categories = skinTypeList.map((category, i) => {
            return (<div onClick={this.filterType(category)} key={category} className="all-index-category" >{category}</div>)
        })

        let filterCategories = (
            <div className="filter-cat" >
                <div className="sub" >
                    <p>Sub Category</p>
                    {categories}
                </div>
                <div className="sub">
                    <p>Skin Type</p>
                    { skin_categories }
                </div>
                <div onClick={this.openAll()} className="all-index-category" >All Skin</div>
            </div>
        )

        return (
            <div className="all-products" >

                <div className="products-header" id="hello">
                    <Link to="/" className="logo-main">
                        <img src="https://aesop-dev.s3-us-west-1.amazonaws.com/Logo-second.png" alt="Logo" />
                    </Link>
                </div>
                <div className="filter-start">
                    <div className="filter-show">
                        <p>Skin</p>
                        <div onClick={ this.toggleOpen() } >Filter By</div>
                    </div>
                    { this.state.filter && filterCategories }
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