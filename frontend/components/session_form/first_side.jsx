


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
                <div className="first-drawer-contain" >
                    <button className="x-button" onClick={this.props.closeSide}>X</button>
                    <button onClick={() => this.props.openSide("second")} className="register-button" >Register</button>
                </div>

                <div className="container">
                    <button type="button" className="slide-in">Slide In</button>
                </div>

            </div>
        )
    }
}

export default FirstSide;