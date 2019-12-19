


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

    handleMouseOver(category) {
        return (e) => {
            e.preventDefault();
            this.props.openSide("second");
            this.props.hoverCategory(category);
        }
    }

    render() {
        
        return (

            <div className="first-drawer" onClick={e => e.stopPropagation()} >
                <div className="first-drawer-contain" >
                    <div className="first-drawer-detail">
                        <div className="first-drawer-detail-image" >
                            <Link to="/" className="logo-main" onClick={this.props.closeSide} >
                                <img src="https://aesop-dev.s3-us-west-1.amazonaws.com/Logo-second.png" alt="Logo" />
                            </Link>
                        </div>
                        {/* <button onMouseEnter={this.handleMouseOver("Skin")}>
                            <Link to="/products/skin" >
                                Skin
                            </Link>
                        </button>
                        <button onMouseEnter={this.handleMouseOver("bodyandhand")}>
                            <Link to="/products/skin">
                                Body
                            </Link>
                        </button> */}

                        <Link to="/products/skin" className="first-link" onClick={this.props.closeSide} >
                            <p onMouseEnter={this.handleMouseOver("Skin")} className="second-line">Skin</p>
                        </Link>
                        <Link to="/products/body" className="first-link" onClick={this.props.closeSide} className="bottom" >
                            <p onMouseEnter={this.handleMouseOver("bodyandhand")}  className="second-line">Body</p>
                        </Link>
                    </div>

                </div>

                <div className="container">
                    <button type="button" className="slide-in">Slide In</button>
                </div>
                {/* { this.props.bodyProducts.map((product) => {
                    return (
                        <div>{product.name}</div>
                    )
                })} */}
            </div>
        )
    }
}

export default FirstSide;