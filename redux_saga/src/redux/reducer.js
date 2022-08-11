import { ADD_TO_CART, REMOVE_TO_CART, CLEAR_CART } from "./constant";

export const cardData = (initialState = [], action) => {
    switch (action.type) {

        case ADD_TO_CART:
            return [action.payload, ...initialState];

        case REMOVE_TO_CART:
            let restProduct = initialState.filter((el) => el.id !== action.productId)
            return [...restProduct];

        case CLEAR_CART:
            return [];

        default:
            return initialState;
    }
}