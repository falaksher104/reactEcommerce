import { createSlice } from "@reduxjs/toolkit";

export const addToCartSlice = createSlice({
  name: "addToCart",
  initialState: {
    allCartProducts: [],
  },

  reducers: {
    addToCartProduct: (state, action) => {
      // console.log({ action, state });
      const productName = action.payload.productName;
      const obj = {};
      obj[`${productName}`] = action.payload;
      // state.allCartProducts.forEach((e) => {
      //   console.log(e);
      // });
      console.log(obj);
      if (!state.allCartProducts.includes(productName)) {
        state.allCartProducts.push(obj);
      } else {
        console.log("good");
      }
    },
    deleteCartProducts: (state) => {
      state.allCartProducts = [];
    },
  },
});

export const { addToCartProduct, deleteCartProducts } = addToCartSlice.actions;
export const selectCartProducts = (state) => state.addToCart.allCartProducts;

export default addToCartSlice.reducer;
