import { ADD_TO_CART, REMOVE_TO_CART, CLEAR_CART, SEARCH_PRODUCT } from "./constant";

export const addToCart = (data) => {
    return {
        type: ADD_TO_CART,
        payload: data
    }
}

export const removeToCart = (id) => {
    return {
        type: REMOVE_TO_CART,
        productId: id
    }
}

export const clearToCart = () => {
    return {
        type: CLEAR_CART
    }
}

export const searchProduct = (query) => {
    return {
        type: SEARCH_PRODUCT,
        query
    }
}