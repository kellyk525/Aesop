
import React from 'react';
import cloneDeep from 'lodash/cloneDeep'
import ProductIndexItem from '../product_show/product_index_item'

class AllProductsIndex extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            filter: "all",
            type: "all",
            first: false,
            open: false,
        }
    }

    componentWillUnmount() {
        window.scrollTo(0, 0);
    }
    
    componentDidMount() {
        this.props.fetchProducts();
    }

    getFilteredProducts(products) {
        let final = products;

        // if (this.state.type === "Dry") {
        //     final = products.filter((product) => product.skin_type === this.state.type )
        //     console.log(final)
        // }

        if (this.state.filter !== "all" && this.state.type !== "all" && this.state.open && !this.state.first ) {
            console.log(this.state.filter)
            console.log(this.state.type)
            console.log(this.state.first)
            console.log(this.state.open)
            console.log("Only Dry")
            final = products.filter((product) => product.skin_type === this.state.type)
            console.log(final)
        }

        if (this.state.filter !== "all" && this.state.type !== "all" && this.state.open && this.state.first) {
            console.log(this.state.filter)
            console.log(this.state.type)
            console.log(this.state.first)
            console.log(this.state.open)
            console.log("Kelly")
            final = products.filter((product) => product.sub_category === this.state.filter && product.skin_type === this.state.type)
        }

        if (this.state.filter !== "all" && this.state.type !== "all" && !this.state.open && this.state.first) {
            console.log(this.state.filter)
            console.log(this.state.type)
            console.log(this.state.first)
            console.log(this.state.open)
            console.log("Ku")
            console.log(products)
            final = products.filter((product) => product.sub_category === this.state.filter)
        }

        if (this.state.filter === "all" && this.state.type !== "all" && this.state.open && !this.state.first) {
            final = products.filter((product) => product.skin_type === this.state.type )
        }

        // if (this.state.type !== "all" && this.state.filter === "all") {
        //     final = products.filter((product) => product.skin_type === this.state.type)
        // }

        console.log(final);
        console.log(this.state.first)
        console.log(this.state.open)
        return final;
        // return final.map((product, i) => {
        //     return (
        //         <div key={i}>{product.name}</div>
        //     )
        // })

    }
    
    filter (field) {
        return (e) => {
            e.preventDefault();
            this.setState({ filter: field })
            this.setState({ first: !this.state.first })
            // this.setState({ type: "all" })
        }
    }

    filterType(field) {
        return (e) => {
            e.preventDefault();
            this.setState({ type: field })
            this.setState({ open: !this.state.open })
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
        console.log(cleanse)

        let categoryList = [];
        allSkinProducts.forEach((product) => {
            if (!categoryList.includes(product.sub_category)) {
                categoryList.push(product.sub_category)
            }
        })

        let categories = categoryList.map((category, i) => {
            return (<div onClick={ this.filter(category) } key={ category } className="all-index-category" >{ category }</div>)
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

        return (
            <div>
                Hello
                <div onClick={this.filter("all")} className="all-index-category" >All</div>
                { categories }
                Hello Two
                { skin_categories }
                Hello Again
                { cleanse.map((product) => {
                    if (product) {
                        console.log(product.id)
                        return (<div>{product.name}</div>)
                    }
                })}
                { hydrate.map((product) => {
                    if (product) {
                        console.log(product.id)
                        return (<div>{product.name}</div>)
                    }
                })}
                { treat.map((product) => {
                    if (product) {
                        console.log(product.id)
                        return (<div>{product.name}</div>)
                    }
                })}
                { exfoliate.map((product) => {
                    if (product) {
                        console.log(product.id)
                        return (<div>{product.name}</div>)
                    }
                })}
                
            </div>
        )
    }
}

export default AllProductsIndex;



// import React from 'react';
// import cloneDeep from 'lodash/cloneDeep'

// class AllProductsIndex extends React.Component {
//     constructor(props) {
//         super(props);

//         this.state = {
//             filter: "all"
//         }
//     }

//     componentWillUnmount() {
//         window.scrollTo(0, 0);
//     }

//     componentDidMount() {
//         this.props.fetchProducts();
//     }

//     getRandomProducts(products, count) {
//         let clonedProducts = cloneDeep(products);
//         let final = [];

//         for (let i = 0; i < count; i++) {
//             let randIndex = Math.floor(Math.random() * clonedProducts.length)
//             final = final.concat(clonedProducts.splice(randIndex, 1))
//         }

//         if (this.state.filter !== "all") {
//             final = final.filter((product) => product.sub_category === this.state.filter)
//         }

//         console.log(final);
//         return final.map((product, i) => {
//             return (
//                 <div key={i}>{product.name}</div>
//             )
//         })

//     }

//     filter(field) {

//         return (e) => {
//             e.preventDefault();
//             this.setState({ filter: field })
//         }
//     }

//     render() {
//         let allProducts = this.props.products;

//         if (!allProducts) return null;

//         let products = this.getRandomProducts(allProducts, allProducts.length);

//         let categoryList = [];
//         allProducts.forEach((product) => {
//             if (!categoryList.includes(product.sub_category)) {
//                 categoryList.push(product.sub_category)
//             }
//         })

//         let categories = categoryList.map((category, i) => {
//             if (category === "bodyandhand") {
//                 categoryList[i] = "Body"
//             }
//             return (<div onClick={this.filter(category)} key={category} className="all-index-category" >{categoryList[i]}</div>)
//         })

//         return (
//             <div>
//                 Hello
//                 {products}
//                 {categories}
//             </div>
//         )
//     }
// }

// export default AllProductsIndex;

