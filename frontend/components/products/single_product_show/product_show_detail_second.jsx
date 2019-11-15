

import React from 'react';

class ProductShowDetailSecond extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        let photo;
        if (this.props.photoUrls) {
            photo = this.props.photoUrls[1];
        } else {
            photo = "https://aesop-dev.s3-us-west-1.amazonaws.com/Exfoliate-Facial-Exfoliant-2-again.png"
        }

        const {how_to_use, dosage, texture, aroma, photoUrls} = this.props.product
        return (
            <div className="second-wrap" >
                <div className="second-wrap-comp">
                    <div className="second-wrap-image">
                        <img src={photo} alt="Second-Photo"/>
                    </div>
                    <div className="second-detail-wrap-main" >
                        <div className="second-detail" >
                            <div className="second-detail-first" >
                                <p>How to use</p>
                                <p>{how_to_use}</p>
                            </div>
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

            </div>
        )
    }
}

export default ProductShowDetailSecond;