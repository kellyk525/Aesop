

import * as cartItemUtils from '../util/cart_api_util';

export const RECEIVE_ALL_CART_ITEMS = 'RECEIVE_ALL_CART_ITEMS';
export const REMOVE_CART_ITEM = 'REMOVE_CART_ITEM';
export const RECEIVE_CART_ITEMS_ERRORS = 'RECEIVE_CART_ITEMS_ERRORS';
export const DELETE_ALL_CART_ITEMS = 'DELETE_ALL_CART_ITEMS';

const receiveAllCartItems = (cartItems) => ({
    type: RECEIVE_ALL_CART_ITEMS,
    cartItems
})

const removeCartItem = (cartItemId) => ({
    type: REMOVE_CART_ITEM,
    cartItemId
})

const receiveCartItemsErrors = (errors) => ({
    type: RECEIVE_CART_ITEMS_ERRORS,
    errors
})

const deleteCartItems = () => ({
    type: DELETE_ALL_CART_ITEMS
})


export const fetchCartItems = () => (dispatch) => (
    cartItemUtils.fetchCartItems()
        .then((cartItems) => dispatch(receiveAllCartItems(cartItems)))
);

export const createCartItem = (cartItem) => (dispatch) => (
    cartItemUtils.createCartItem(cartItem)
        .then((cartItems) => dispatch(receiveAllCartItems(cartItems)),
            (errors) => dispatch(receiveCartItemsErrors(errors.responseJSON)))
);

export const updateCartItem = (cartItem) => (dispatch) => (
    cartItemUtils.updateCartItem(cartItem)
        .then((cartItems) => dispatch(receiveAllCartItems(cartItems)),
            (errors) => dispatch(receiveCartItemsErrors(errors.responseJSON)))
);

export const deleteCartItem = (id) => (dispatch) => (
    cartItemUtils.deleteCartItem(id)
        .then((cartItemId) => dispatch(removeCartItem(cartItemId)))
);

export const deleteAllCartItems = (cartItems) => (dispatch) => (
    cartItemUtils.deleteAllCartItems(cartItems)
        .then(() => dispatch(deleteCartItems()))
);