
import React from 'react';
import { withRouter } from 'react-router-dom'

class AesopProductIndexItem extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { name, description, photoUrls } = this.props.product
        debugger
        return (
            <div>
                <div> { name } </div>
                <div> { description }</div>
                <figure>
                    <img src={photoUrls[0]} alt="Photo" />
                </figure>
                HELLO!
            </div>
        )
    }

}

export default AesopProductIndexItem;