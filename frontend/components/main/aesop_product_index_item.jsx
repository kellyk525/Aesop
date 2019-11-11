
import React from 'react';
import { withRouter } from 'react-router-dom'

class AesopProductIndexItem extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { name, description, photoUrl } = this.props.product
        return (
            <div>
                <div> { name } </div>
                <div> { description }</div>
                <img src={ photoUrl } />
                HELLO!
            </div>
        )
    }

}

export default AesopProductIndexItem;