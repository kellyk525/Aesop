

import React from 'react';

class ThirdSide extends React.Component {
    constructor(props) {
        super(props);
    }

    handleSubmit(e) {
        return (e) => {
            e.preventDefault();
            this.props.closeSide;
        };
    }

    render() {


        return (
            <div className="third-drawer" onClick={e => e.stopPropagation()} >
                <button className="x-button" onClick={this.props.closeSide}>X</button>

            </div>
        )
    }
}

export default ThirdSide;