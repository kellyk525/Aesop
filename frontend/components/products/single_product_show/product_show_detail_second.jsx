

import React from 'react';

class ProductShowDetailSecond extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {

        const {how_to_use, dosage, texture, aroma} = this.props.product
        return (
            <div className="second-wrap" >
                <div className="second-wrap-comp">
                    <img src="https://aesop-dev.s3-us-west-1.amazonaws.com/Second.png" alt="Second-Photo"/>
                    <div className="second-detail" >
                        <div>How to use</div>
                        <div>{how_to_use}</div>
                        <div className="second-detail-wrap">
                            <p>Dosage</p>
                            <p>{dosage}</p>
                        </div>
                        <div className="second-detail-wrap">
                            <p>Texture</p>
                            <p>{texture}</p>
                        </div>
                        <div className="second-detail-wrap">
                            <p>Aroma</p>
                            <p>{aroma}</p>
                        </div>
                    </div>
                </div>

            </div>
        )
    }
}

export default ProductShowDetailSecond;