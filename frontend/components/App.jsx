import React from "react";
import { Route, Switch, Redirect } from 'react-router-dom';
import { AuthRoute, ProtectedRoute } from "../util/route_util";
import GreetingContainer from './greeting/greeting_container';
import Home from './home';
import Modal from "./modal/modal";
import HeaderContainer from './header/header_container';
import Greeting from "./greeting/greeting";
import Toolbar from './toolbar/toolbar';


// Toolabar holds the drawerToggleButton
// drawerToggleButton should always open the drawer
// clicking on the backdrop -- should close it

const App = () => (
    <div style={{height: '100%'}}>
        <Toolbar />
        <main style={{marginTop: '64px'}} ></main>
        <Modal />

        <Switch>
            <Route exact path={"/"} component={ Home } />
            <Redirect to="/" />
        </Switch>
    </div>
);

export default App;
