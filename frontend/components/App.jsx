import React from "react";
import { Route, Switch, Redirect } from 'react-router-dom';
import { AuthRoute, ProtectedRoute } from "../util/route_util";
import GreetingContainer from './greeting/greeting_container';
import Home from './home';
import Modal from "./modal/modal";
import Side from "./modal/side";
import HeaderContainer from './header/header_container';
import Greeting from "./greeting/greeting";
import Toolbar from './toolbar/toolbar';
import SkinProductContainer from './products/skin_products/skin_products_container';

// Toolabar holds the drawerToggleButton
// drawerToggleButton should always open the drawer
// clicking on the backdrop -- should close it


const App = () => (
    <div style={{height: '100%'}}>
        <Toolbar />
        <main style={{ marginTop: '76px'}} ></main>
        <Modal />
        <Side />

        <Switch>
            <Route exact path={"/"} component={ Home } />
            <Route exact path={"/products/skin"} component={ SkinProductContainer } />
            <Redirect to="/" />
        </Switch>
    </div>
);

export default App;
