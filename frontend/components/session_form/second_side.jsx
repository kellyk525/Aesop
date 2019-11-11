

import React from 'react';

class SecondSide extends React.Component {
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
            <div className="second-drawer" onClick={e => e.stopPropagation()} >
                <button className="x-button" onClick={this.props.closeSide}>X</button>

                <button onClick={() => this.props.openSide("third")} className="register-button" >Register</button>

            </div>
        )
    }
}

export default SecondSide;