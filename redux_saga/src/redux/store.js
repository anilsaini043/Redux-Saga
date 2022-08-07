// WITHOUT REDUX TOOLKIT

// import { createStore } from "redux";
// import rootReducer from "./rootReducer";

// const store = createStore(rootReducer);

// export default store;

// WITH REDUX TOOLKIT

import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "./rootReducer";

const store = configureStore({reducer: rootReducer});

export default store;