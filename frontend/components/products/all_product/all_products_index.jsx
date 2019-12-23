
import React from 'react';

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
    
    filter (field) {
        return (e) => {
            e.preventDefault();
            this.setState({ filter: field })
        }
    }

    render() {
        let allProducts = this.props.products;

        if (!allProducts) return null;

        let categoryList = [];
        allProducts.forEach((product) => {
            if (!categoryList.includes(product.category)) {
                categoryList.push(product.category)
            }
        })
        console.log(categoryList)
        allProducts.map((product) => console.log(product.name))

        return (
            <div>
                Hello
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