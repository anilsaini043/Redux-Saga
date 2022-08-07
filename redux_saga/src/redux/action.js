import { ADD_TO_CART, REMOVE_TO_CART, CLEAR_CART } from "./constant";

export const addToCart = (data) => {
    return {
        type: ADD_TO_CART,
        payload: data
    }
}

export const removeToCart = () => {
    return {
        type: REMOVE_TO_CART
    }
}

export const clearToCart = () => {
    return {
        type: CLEAR_CART
    }
}