import { ADD_TO_CART, REMOVE_TO_CART, CLEAR_CART } from "./constant";

export const cardData = (initialState = [], action) => {
    console.log("rEducer--", action)
    switch (action.type) {

        case ADD_TO_CART:
            return [action.payload, ...initialState];

        case REMOVE_TO_CART:
            console.log("remove--", initialState.pop())
            return initialState.slice(0,1);

        case CLEAR_CART:
            return [];

        default:
            return initialState;
    }
}