import React from 'react';

class ProductShowDetail extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            product_id: null,
            quantity: 1
        }
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.product.id !== this.props.product.id) {
            console.log("Hello this is Kelly")
            this.setState({ product_id: parseInt(nextProps.product.id), quantity: 1 }, () => {
                console.log(this.state.product_id)
            })
        }
    }
    componentDidUpdate(prevProps) {
        // prevProps is the current props
        // this.props will be the new props
    }

    componentDidMount() {
        this.setState({ product_id: parseInt(this.props.product.id), quantity: 1 }, () => {
            console.log(this.state.product_id)
        })
        // Only hits it once the first time it mounts
    }

    addedToCart() {
        let newEl = document.getElementsByClassName("quantity-added-to-cart");
        newEl[0].style.display = "block";
        setTimeout(() => newEl[0].style.display = "none", 2000)
    }

    handleSubmit() {
        
        return () => {
            this.props.createCartItem(this.state)
                .then(console.log(this.state));
            this.addedToCart();
        }
    }

    render() {

        const { name, description, category, sub_category, skin_feel, aroma, key_ingredients, price }  = this.props.product
        const { currentUserId, openModal } = this.props;
        
        console.log("Hello current User")
        console.log(currentUserId)
        return (
            <div className="for-item-added">
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
                <div className="add-to-cart" onClick={ currentUserId ? this.handleSubmit() : () => openModal("login") }>
                    <p>Add to your cart  -  ${price}</p>
                </div>
                <div className="quantity-added-to-cart"> Item added to cart</div>
            </div>
        )
    }
}

export default ProductShowDetail;