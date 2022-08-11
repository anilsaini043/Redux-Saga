/** **************************** */
// WITHOUT REDUX TOOLKIT
/** **************************** */

// import { createStore } from "redux";
// import rootReducer from "./rootReducer";

// const store = createStore(rootReducer);

// export default store;

/** **************************** */
// WITH REDUX TOOLKIT
/** **************************** */

// import { configureStore } from "@reduxjs/toolkit";
// import rootReducer from "./rootReducer";

// const store = configureStore({reducer: rootReducer});

// export default store;

/** **************************** */
// SAGA IMPLEMENTATION
/** **************************** */

import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleWare  from "redux-saga";
import rootReducer from "./rootReducer";
import productSaga from "./saga/productSaga";

const sagaMiddleware = createSagaMiddleWare();

const store = configureStore({
    reducer:rootReducer,
    middleware: ()=> [sagaMiddleware]
})

sagaMiddleware.run(productSaga)

export default store;


