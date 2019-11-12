
import React from 'react';
import { withRouter } from 'react-router-dom'

class AesopProductIndexItem extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { name, skin_feel , photoUrls } = this.props.product
        
        return (
            <div>
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
    
            </div>
        )
    }

}

export default AesopProductIndexItem;