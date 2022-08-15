import { configureStore } from "@reduxjs/toolkit";
// import counterReducer from "../features/counter/counterSlice";
import addToCartReducer from "../features/AddtocartSlice";

export const store = configureStore({
  reducer: {
    addToCart: addToCartReducer,
  },
});
