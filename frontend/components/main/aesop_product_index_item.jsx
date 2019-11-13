
import React from 'react';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router-dom'

class AesopProductIndexItem extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { name, skin_feel , photoUrls, id } = this.props.product
        
        return (
            <div>
                <Link to={`/products/${name}~${id}`} className="link-product">
                <div className="main-index-item">
                    <div className="main-item-photo">
                        <div className="photo-contain">
                            <img src={photoUrls[0]} alt="Photo" />
                        </div>
                    </div>
                    <div className="text">
                        <h1>{name}</h1>
                        <p>{skin_feel}</p>
                    </div>
                </div>
                </Link>
            </div>
        )
    }

}

export default AesopProductIndexItem;