
import * as productUtils from '../util/product_api_util';

export const RECEIVE_PRODUCTS = 'RECEIVE_PRODUCTS';
export const RECEIVE_ONE_PRODUCT = 'RECEIVE_ONE_PRODUCT';

const receiveProducts = (products) => ({
    type: RECEIVE_PRODUCTS,
    products
})

const receiveOneProduct = (product) => ({
    type: RECEIVE_ONE_PRODUCT,
    product
})

export const fetchProducts = () => dispatch => (
    productUtils.fetchProducts()
        .then((products) => dispatch(receiveProducts(products)))
)

export const fetchProduct = (productId) => dispatch => (
    productUtils.fetchProduct(productId)
        .then((product) => dispatch(receiveOneProduct(product)))
)