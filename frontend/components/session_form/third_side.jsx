

import React from 'react';

class ThirdSide extends React.Component {
    constructor(props) {
        super(props);
    }

    handleSubmit(e) {
        return (e) => {
            e.preventDefault();
            this.props.closeSide();
        };
    }

    render() {

        return (
            <div className="third-drawer" onClick={e => e.stopPropagation()} >
                <div className="third-drawer-contain" >
                    <button className="x-button" onClick={this.props.closeSide}>X</button>
                    <div  className="third-contain-main">
                        <div className="third-contain-image">
                            <div className="third-contain-image-center">
                                <img src={this.props.product.photoUrls[0]} alt="Photo"/>
                            </div>
                        </div>
                        <div>{this.props.product.name}</div>
                        <div className="add-to-cart">
                            <p>Add to your cart  -  ${this.props.product.price}</p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default ThirdSide;