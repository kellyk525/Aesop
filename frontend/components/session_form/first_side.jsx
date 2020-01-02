


import React from 'react';
import { Link } from 'react-router-dom';
import SearchContainer from '../search/search_container';

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

        let main;
        if (this.props.products) {
            main = <div> <SearchContainer /> </div>
        } else {
            main = <div>
                <Link to="/products/skin" className="first-link" onClick={this.props.closeSide} >
                    <p onMouseEnter={this.handleMouseOver("Skin")} className="second-line">Skin</p>
                </Link>
                <Link to="/products/body" className="first-link" onClick={this.props.closeSide} className="bottom" >
                    <p onMouseEnter={this.handleMouseOver("bodyandhand")} className="second-line">Body</p>
                </Link>
            </div>
        }
        
        return (
            <div className="first-drawer" onClick={e => e.stopPropagation()} >
                <div className="first-drawer-contain" >
                    <div className="first-nav">
                        <div className="toolbar-navigation-items" >
                            <ul className="first-nav-list">
                                <li onClick={() => this.props.openSide("first")} >Shop</li>
                                <li onClick={() => this.props.openSide("first")}>Read</li>
                                <li onClick={() => this.props.openSide("first")}>Stores</li>
                                <li onClick={() => this.props.openSide("search")}>Search</li>
                            </ul>
                        </div>
                    </div>
                    <div className="first-drawer-detail">
                        <div className="first-drawer-detail-image" >
                            <Link to="/" className="logo-main" onClick={this.props.closeSide} >
                                <img src="https://aesop-dev.s3-us-west-1.amazonaws.com/Logo-second.png" alt="Logo" />
                            </Link>
                        </div>
                        { main }
                    </div>
                </div>
                {/* <div className="container">
                    <button type="button" className="slide-in">Slide In</button>
                </div> */}
            </div>
        )
    }
}

export default FirstSide;