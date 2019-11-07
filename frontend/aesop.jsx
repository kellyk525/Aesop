
import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import Root from './components/Root';
import * as sessionActions from './actions/session_actions';
import * as productActions from './actions/product_actions';

document.addEventListener("DOMContentLoaded", () => {
    const root = document.getElementById("root");

    let store;
    if (window.currentUser) {
        const preloadedState = {
            entities: {
                users: { [window.currentUser.id]: window.currentUser }
            },
            session: { id: window.currentUser.id }
        };
        store = configureStore(preloadedState);
        delete window.currentUser;
    } else {
        store = configureStore();
    }

    window.getState = store.getState
    window.dispatch = store.dispatch;
    window.fetchProducts = productActions.fetchProducts;
    window.fetchProduct = productActions.fetchProduct;

    window.signup = sessionActions.signup;
    window.login = sessionActions.login;
    window.logout = sessionActions.logout;

    ReactDOM.render( <Root store={store} />, root)
})

// // window.getState = store.getState;
// window.signup = sessionActions.signup;
// window.login = sessionActions.login;
// window.logout = sessionActions.logout;