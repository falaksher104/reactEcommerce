import { configureStore } from "@reduxjs/toolkit";
import addToCartReducer from "../features/AddtocartSlice";

export const store = configureStore({
  reducer: {
    addToCart: addToCartReducer,
  },
});
