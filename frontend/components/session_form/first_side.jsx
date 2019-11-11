


import React from 'react';

class FirstSide extends React.Component {
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
            <div className="first-drawer" onClick={e => e.stopPropagation()} >
                <button className="x-button" onClick={this.props.closeSide}>X</button>

                <button onClick={() => this.props.openSide("second")} className="register-button" >Register</button>
                
            </div>
        )
    }
}

export default FirstSide;