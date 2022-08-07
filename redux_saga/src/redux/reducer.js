import { ADD_TO_CART, REMOVE_TO_CART, CLEAR_CART } from "./constant";

export const cardData = (initialState = [], action) => {
    console.log("rEducer--", action)
    switch (action.type) {

        case ADD_TO_CART:
            return [action.payload, ...initialState];

        case REMOVE_TO_CART:
            initialState.length = initialState.length ? initialState.length-1 : []
            return [...initialState];

        case CLEAR_CART:
            return [];

        default:
            return initialState;
    }
}