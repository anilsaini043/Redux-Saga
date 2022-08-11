import { SET_PRODUCT_LIST } from "./constant";

export const productData = (data=[], action) => {
    console.log("Product Reduceer--", action)
    switch(action.type){
        case SET_PRODUCT_LIST:
            return [ action.payload, ...data];
        default:
            return data;
    }
}