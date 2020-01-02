
import React from 'react';
// import DrawerToggleButton from '../side_drawer/drawer_toggle_button';
import Backdrop from '../backdrop/backdrop';
import HeaderContainer from '../header/header_container';
import CartContainer from '../cart/cart_items_container';

class Toolbar extends React.Component  {

    constructor(props) {
        super(props);
        this.state = {
            sideDrawerOpen: false,
            open: false
        }

        this.toggleOpen = this.toggleOpen.bind(this);
        this.drawerToggleClickHandler = this.drawerToggleClickHandler.bind(this);
        this.backdropClickHandler = this.backdropClickHandler.bind(this);
    }

    toggleOpen() {
        this.setState({ open: !this.state.open });
    }

    drawerToggleClickHandler() {
        this.setState((prevState) => {
            return { sideDrawerOpen: !prevState.sideDrawerOpen }
        });
    };

    backdropClickHandler() {
        this.seState({ sideDrawerOpen: false })
    }

    componentDidMount() {
        this.props.fetchCartItems();
    }


    render () {
        const { cartItems } = this.props;

        let quantity
        if (cartItems.length === 0) {
            quantity = <div className="cart-open-none" onClick={this.toggleOpen}></div>
        } else {
            quantity = <div className="cart-open" onClick={this.toggleOpen}><span>{cartItems.length}</span></div>
        }

        let backdrop;
        if (this.state.sideDrawerOpen) {
            backdrop = <Backdrop click={ this.backdropClickHandler } />;
        }

        let cart = <CartContainer toggleOpen={this.toggleOpen} />

        return (
            <header className="toolbar">
                { this.state.open && cart }
                <nav className="toolbar-navigation">
                    <div className="toolbar-navigation-items" >
                        <ul>
                            <li onClick={() => this.props.openSide("first")} >Shop</li>
                            <li onClick={() => this.props.openSide("first")}>Read</li>
                            <li onClick={() => this.props.openSide("first")}>Stores</li>
                            <li onClick={() => this.props.openSide("search")}>Search</li>
                        </ul>
                    </div>
                    <div className="spacer" ></div>
                    <div className="toolbar-right" >
                        <HeaderContainer />
                        { quantity }
                    </div>
                    <div>
                        { backdrop }
                    </div>
                </nav>
                <div className="toolbar-logo" ><a href="/"></a></div>
            </header>
        )
    }
}

export default Toolbar;