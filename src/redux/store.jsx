// import { createStore } from 'redux';
// import rootReducer from './cartReducer';

// const store = createStore(rootReducer);

// export default store;

import { configureStore } from "@reduxjs/toolkit";
import productReducer from "./productSlice.jsx"

const store = configureStore({
    reducer: productReducer,
})

export default store;