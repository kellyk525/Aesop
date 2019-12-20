import React from 'react';

class ProductShowDetail extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            product_id: parseInt(props.product.id),
            quantity: 1
        }
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleSubmit() {
        debugger
        return () => {
            this.props.createCartItem(this.state)
                .then(console.log("hello"));
        }
    }

    render() {

        const { name, description, category, sub_category, skin_feel, aroma, key_ingredients, price }  = this.props.product
        return (
            <div>
                <div className="first-detail-wrap">
                    <div className="first-detail">
                        <p>{category}</p>
                        <div className="middle">-</div>
                        <p>{sub_category}</p>
                    </div>
                    <h1>{name}</h1>
                    <p className="description">{description}</p>
                </div>

                <div className="second-detail-wrap">
                    <p>Skin Feel</p>
                    <p>{skin_feel}</p>
                </div>
                <div className="second-detail-wrap">
                    <p>Aroma</p>
                    <p>{aroma}</p>
                </div>
                <div className="second-detail-wrap">
                    <p>Key Ingredients</p>
                    <p>{key_ingredients}</p>
                </div>
                <div className="add-to-cart" onClick={ this.handleSubmit() }>
                    <p>Add to your cart  -  ${price}</p>
                </div>
            </div>
        )
    }
}

export default ProductShowDetail;