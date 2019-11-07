
import React from 'react';
import { withRouter } from 'react-router-dom'

class AesopProductIndexItem extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { name } = this.props.product
        return (
            <div>
                <div> { name } </div>
                HELLO!
            </div>
        )
    }

}

export default AesopProductIndexItem;