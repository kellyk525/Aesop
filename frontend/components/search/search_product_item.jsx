import React from 'react';

class SearchProductItem extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { product } = this.props;
        if (!product) return null;

        return(
            <div>
                { product.name }
            </div>
        )
    }
}

export default SearchProductItem;