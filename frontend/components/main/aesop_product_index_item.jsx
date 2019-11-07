
import React from 'react';
import { withRouter } from 'react-router-dom'

class AesopProductIndexItem extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { name, description } = this.props.product
        return (
            <div>
                <div> { name } </div>
                <div> { description }</div>
                HELLO!
            </div>
        )
    }

}

export default AesopProductIndexItem;