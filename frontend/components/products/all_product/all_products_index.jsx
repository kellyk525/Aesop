
import React from 'react';
import cloneDeep from 'lodash/cloneDeep'

class AllProductsIndex extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            filter: "all"
        }
    }
    
    componentDidMount() {
        this.props.fetchProducts();
    }

    getRandomProducts(products, count) {
        let clonedProducts = cloneDeep(products);
        let final = [];

        for (let i = 0; i < count; i++) {
            let randIndex = Math.floor(Math.random() * clonedProducts.length)
            final = final.concat(clonedProducts.splice(randIndex, 1))
        }

        if (this.state.filter !== "all") {
            final = final.filter((product) => product.category === this.state.filter )
        }

        console.log(final);
        return final.map((product, i) => {
            return (
                <div key={i}>{product.name}</div>
            )
        })
    }
    
    filter (field) {
        
        return (e) => {
            e.preventDefault();
            this.setState({ filter: field })
        }
    }

    render() {
        let allProducts = this.props.products;

        if (!allProducts) return null;

        let products = this.getRandomProducts(allProducts, allProducts.length);

        let categoryList = [];
        allProducts.forEach((product) => {
            if (!categoryList.includes(product.category)) {
                categoryList.push(product.category)
            }
        })

        let categories = categoryList.map((category, i) => {
            if (category === "bodyandhand") {
                categoryList[i] = "Body"
            }
            return (<div onClick={ this.filter(category) } key={ category } className="all-index-category" >{categoryList[i]}</div>)
        })

        return (
            <div>
                Hello
                { products }
                { categories }
            </div>
        )
    }
}

export default AllProductsIndex;



// let categories = categoryArr.map((category) =>
//     <div key={category} onClick={this.filter(category)} className="product-index-category">{category}</div>
// )
        // console.log(this.props.products);
        // let allProducts = this.props.products;

        // let categoryArr = [];
        // allProducts.forEach((product) => {
        //     if (!categoryArr.includes(product.sub_category)) {
        //         categoryArr.push(product.sub_category);
        //         console.log(product.sub_category);
        //     } 
        // })
        // console.log(categoryArr);