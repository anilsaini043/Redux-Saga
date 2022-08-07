import { combineReducers } from "redux";
import { cardData } from "./reducer";
import { productData } from "./productReducer";

const rootReducer = combineReducers({ 
    cardData,
    productData
})

export default rootReducer;