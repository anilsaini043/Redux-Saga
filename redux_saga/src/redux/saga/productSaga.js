import { takeEvery, put } from "redux-saga/effects";
import { PRODUCT_LIST, SEARCH_PRODUCT, SET_PRODUCT_LIST } from "../constant";

function* getProducts(){
    let data = yield fetch("http://localhost:3000/products");
    data = yield data.json();
    yield put({ type: SET_PRODUCT_LIST, payload: data })
}

function* getFilteredProduct(payload){
    let data = yield fetch(`http://localhost:3000/products?q=${payload.query}`);
    data = yield data.json();
    yield put({ type: SET_PRODUCT_LIST, payload: data })
}

function* productSaga(){
    yield takeEvery(PRODUCT_LIST, getProducts)
    yield takeEvery(SEARCH_PRODUCT, getFilteredProduct)
}

export default productSaga;