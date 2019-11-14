


import React from 'react';
import { Link } from 'react-router-dom';

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

    handleMouseOver(e) {
        return (e) => {
            e.preventDefault();
            this.props.openSide("second")
        }
    }

    render() {
        
        return (

            <div className="first-drawer" onClick={e => e.stopPropagation()} >
                <div className="first-drawer-contain" >
                    <div>
                        <Link to="/" className="logo-main">
                            <img src="https://aesop-dev.s3-us-west-1.amazonaws.com/Logo-second.png" alt="Logo" />
                        </Link>
                    </div>
                    <button onMouseEnter={this.handleMouseOver()} className="register-button" >
                        <Link to="/products/skin" >
                            Skin
                        </Link>
                    </button>
                </div>

                <div className="container">
                    <button type="button" className="slide-in">Slide In</button>
                </div>

            </div>
        )
    }
}

export default FirstSide;