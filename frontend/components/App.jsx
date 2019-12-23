import React from "react";
import { Route, Switch, Redirect } from 'react-router-dom';
import { AuthRoute, ProtectedRoute } from "../util/route_util";
import Home from './home';
import Modal from "./modal/modal";
import Side from "./modal/side";
import ToolbarContainer from './toolbar/toolbar_container';
import SkinProductsIndexContainer from './products/product_show/skin_products_index_container';
import BodyProductsIndexContainer from './products/product_show/body_products_index_container';
import AllProductsIndexContainer from './products/all_product/all_products_index_container';
import ProductShowContainer from './products/single_product_show/product_show_container';
import CartItemsContainer from './cart/cart_items_container';
import SearchContainer from './search/search_container';

// Toolabar holds the drawerToggleButton
// drawerToggleButton should always open the drawer
// clicking on the backdrop -- should close it


const App = () => (
    <div style={{height: '100%'}}>
        <ToolbarContainer />
        {/* <main style={{ marginTop: '64px'}} ></main> */}
        <Modal />
        <Side />
        {/* <SearchContainer /> */}
        <Switch>
            <Route exact path={"/"} component={ Home } />
            <Route exact path={"/products/skin"} component={ SkinProductsIndexContainer } />
            <Route exact path={"/products/body"} component={ BodyProductsIndexContainer } />
            <Route exact path={"/all"} component={ AllProductsIndexContainer } />
            <Route exact path={"/products/:productName~:productId"} component={ ProductShowContainer } />
            <Route exact path={"/cart"} component={ CartItemsContainer } />
            <Route exact path={"/search"} component={ SearchContainer } />
            <Redirect to="/" />
        </Switch>
    </div>
);

export default App;
