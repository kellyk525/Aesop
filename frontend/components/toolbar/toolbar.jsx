
import React from 'react';
// import DrawerToggleButton from '../side_drawer/drawer_toggle_button';
import Backdrop from '../backdrop/backdrop';
import HeaderContainer from '../header/header_container';

class Toolbar extends React.Component  {

    constructor(props) {
        super(props);
        this.state = {
            sideDrawerOpen: false
        }

        this.drawerToggleClickHandler = this.drawerToggleClickHandler.bind(this);
        this.backdropClickHandler = this.backdropClickHandler.bind(this);
    }

    drawerToggleClickHandler() {
        this.setState((prevState) => {
            return { sideDrawerOpen: !prevState.sideDrawerOpen }
        });
    };

    backdropClickHandler() {
        this.seState({ sideDrawerOpen: false })
    }

    render () {
        let sideDrawer;
        let backdrop;

        if (this.state.sideDrawerOpen) {
            // sideDrawer = <SideDrawer />;
            backdrop = <Backdrop click={ this.backdropClickHandler } />;
        }
        return (
            <header className="toolbar">
                <nav className="toolbar-navigation">
                    <div className="toolbar-navigation-items" >
                        <ul>
                            <li onClick={() => this.props.openSide("first")} >Shop</li>
                            <li onClick={() => this.props.openSide("first")}>Read</li>
                            <li onClick={() => this.props.openSide("first")}>Stores</li>
                            <li onClick={() => this.props.openSide("first")}>Search</li>
                        </ul>
                    </div>
                    <div className="spacer" ></div>
                    <div>
                        <HeaderContainer />
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