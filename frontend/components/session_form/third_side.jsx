

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
                    <div>{this.props.product.description}</div>
                    <img src={this.props.product.photoUrls[0]} alt="Photo"/>
                </div>
            </div>
        )
    }
}

export default ThirdSide;