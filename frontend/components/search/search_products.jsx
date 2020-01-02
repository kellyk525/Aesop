
import React from 'react';
import SearchProductItem from './search_product_item';

class SearchProducts extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            search: '',
            open: false
        }

    }

    updateSearch() {
        return (e) => {
            this.setState({ search: e.target.value }, () => console.log("hello"))
            this.setState({ open: !this.state.open })
        }
    }

    componentDidMount() {
        this.props.fetchProducts();
    }

    render() {
        const { products, hoverProduct, openSide } = this.props;
        debugger

        let filteredProducts = products.filter(
            (product) => {
                if (product.category.toLowerCase().indexOf(this.state.search.toLowerCase()) !== -1) {
                    return true;
                }
                if (product.name.toLowerCase().indexOf(this.state.search.toLowerCase()) !== -1) {
                    return true;
                }
                if (product.sub_category.toLowerCase().indexOf(this.state.search.toLowerCase()) !== -1) {
                    return true;
                }
                if (product.texture.toLowerCase().indexOf(this.state.search.toLowerCase()) !== -1) {
                    return true;
                }
                if (product.aroma.toLowerCase().indexOf(this.state.search.toLowerCase()) !== -1) {
                    return true;
                }

            }
        );
        
        let filtered;
        if (products.length === 0) {
            return null;
        } else {
            filtered = (
                filteredProducts.map((product) => {
                    return (
                        <SearchProductItem product={product} key={product.id} hoverProduct={hoverProduct} openSide={openSide} />
                    )
                })
            )
        }

        return (
            <div className="first-search">
                <input type="text" value={ this.state.search } onChange={ this.updateSearch() } className="search-input" />
                <ul>
                    { filtered }
                </ul>
            </div>
        )
    }
}

export default SearchProducts;
