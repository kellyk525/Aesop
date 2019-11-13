import React from 'react';

class ProductShowDetail extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {

        const { name, description, category, sub_category, skin_feel, aroma, key_ingredients, price }  = this.props.product
        return (
            <div>
                <div className="first-detail-wrap">
                    <div className="first-detail">
                        <p>{category}</p>
                        <div>-</div>
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
                <div className="add-to-cart">
                    <p>Add to your cart  -  ${price}</p>
                </div>
            </div>
        )
    }
}

export default ProductShowDetail;