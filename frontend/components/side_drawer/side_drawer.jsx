
import React from 'react';
import NextSideDrawer from '../side_drawer/next_side_drawer';
import NextDrawerToggle from '../side_drawer/next_drawer_toggle';
import { Link } from 'react-router-dom';
import Backdrop from '../backdrop/backdrop';

class sideDrawer extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            nextSideDrawerOpen: false,
        }
        this.nextDrawerToggleClickHandler = this.nextDrawerToggleClickHandler.bind(this);
        this.nextbackdropClickHandler = this.nextbackdropClickHandler.bind(this);
    }

    // oneToggle() {
    //     this.setState(() => ({two : this.state.two}))
    // }

    // twoToggle() {
    //     this.setState(() => ({ three: this.state.three }))

    // }

    nextbackdropClickHandler() {

        this.setState({ nextSideDrawerOpen: false })
    }

    nextDrawerToggleClickHandler() {
        this.setState((prevState) => {
            return { nextSideDrawerOpen: !prevState.nextSideDrawerOpen }
        });
    };

    // componentDidUpdate(prevProps) {
    //     if (prevProps.nextSideDrawerOpen !== this.props.nextSideDrawerOpen) {
    //         debugger
    //     }
    // }

    render() {
        let drawerClasses = ["side-drawer"];

        if (this.props.show) {
            drawerClasses = ["side-drawer open"]
        }

        let nextBackdrop;
        if (this.state.nextSideDrawerOpen) {
            debugger
            nextBackdrop = <Backdrop nextClick={ this.nextbackdropClickHandler } />;
        }

        return (
            <div>
                <nav className={drawerClasses}>
                    <ul>
                        <Link to="/products/skin" className="link" >Skin</Link>
                        <Link to="/products/skin" className="link" >Hair</Link>
                        <Link to="/products/skin" className="link" >Body Hand</Link>
                        <Link to="/products/skin" className="link" >Fragrance</Link>
                        <Link to="/products/skin" className="link" >Home</Link>
                        <Link to="/products/skin" className="link" >Kits Travel</Link>
                        <Link to="/products/skin" className="link" >Gifts</Link>
                        <div>
                            <NextDrawerToggle  nextClick={this.nextDrawerToggleClickHandler} />
                        </div>
                    </ul>
                </nav>
                <div>
                    <NextSideDrawer show={this.state.nextSideDrawerOpen} nextClick={this.nextDrawerToggleClickHandler} />
                </div>

                    
                {nextBackdrop}
            </div>
        )


    }
}

export default sideDrawer;

// ///////////////////////////////////



// import React from 'react';
// import DrawerToggleButton from '../side_drawer/drawer_toggle_button';
// import SideDrawer from '../side_drawer/side_drawer';
// import Backdrop from '../backdrop/backdrop';
// import HeaderContainer from '../header/header_container';

// class Toolbar extends React.Component {

//     constructor(props) {
//         super(props);
//         this.state = {
//             sideDrawerOpen: false
//         }

//         this.drawerToggleClickHandler = this.drawerToggleClickHandler.bind(this);
//         this.backdropClickHandler = this.backdropClickHandler.bind(this);
//     }

//     drawerToggleClickHandler() {
//         this.setState((prevState) => {
//             return { sideDrawerOpen: !prevState.sideDrawerOpen }
//         });
//     };

//     backdropClickHandler() {
//         this.setState({ sideDrawerOpen: false })
//     }

//     render() {
//         let sideDrawer;
//         let backdrop;

//         if (this.state.sideDrawerOpen) {
//             // sideDrawer = <SideDrawer />;
//             backdrop = <Backdrop click={this.backdropClickHandler} />;
//         }
//         return (
//             <header className="toolbar">
//                 <nav className="toolbar-navigation">
//                     <div>
//                         <DrawerToggleButton click={this.drawerToggleClickHandler} />
//                     </div>
//                     <div className="toolbar-navigation-items" >
//                         <ul>
//                             <li><a href="/">Shop</a></li>
//                             <li><a href="/">Read</a></li>
//                             <li><a href="/">Stores</a></li>
//                             <li><a href="/">Search</a></li>
//                         </ul>
//                     </div>
//                     <div className="spacer" ></div>
//                     <div>
//                         <HeaderContainer />
//                     </div>
//                     <div>
//                         <SideDrawer show={this.state.sideDrawerOpen} />
//                     </div>
//                     <div>
//                         {backdrop}
//                     </div>
//                 </nav>
//                 <div className="toolbar-logo" ><a href="/">AESOP</a></div>
//             </header>
//         )
//     }
// }

// export default Toolbar;



// ///////////////////////////////////



// import React from 'react';
// import { Link } from 'react-router-dom'

// const sideDrawer = props => {

//     let drawerClasses = ["side-drawer"];

//     if (props.show) {
//         drawerClasses = ["side-drawer open"]
//     }

//     return (
//         <nav className={drawerClasses}>
//             <ul>
//                 <Link to="/products/skin" className="link" onClick={props.click} >Skin</Link>
//                 <Link to="/products/skin" className="link" onClick={props.click} >Hair</Link>
//                 <Link to="/products/skin" className="link" onClick={props.click} >Body Hand</Link>
//                 <Link to="/products/skin" className="link" onClick={props.click} >Fragrance</Link>
//                 <Link to="/products/skin" className="link" onClick={props.click} >Home</Link>
//                 <Link to="/products/skin" className="link" onClick={props.click} >Kits Travel</Link>
//                 <Link to="/products/skin" className="link" onClick={props.click} >Gifts</Link>
//             </ul>
//         </nav>
//     )
// }

// export default sideDrawer;
