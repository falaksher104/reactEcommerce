import { createSlice } from "@reduxjs/toolkit";

export const addToCartSlice = createSlice({
  name: "addToCart",
  initialState: {
    allCartProducts: [],
    singleProductDetail: {},
  },

  reducers: {
    addToCartProduct: (state, action) => {
      state.allCartProducts.push(action.payload);
      const productIds = state.allCartProducts.map((o) => o.productId);
      const filtered = state.allCartProducts.filter(
        ({ productId }, index) => !productIds.includes(productId, index + 1)
      );
      // filtered objects are stored in redux array => state.allCartProducts
      state.allCartProducts = filtered;
    },
    addSingleProductDetail: (state, action) => {
      state.singleProductDetail = action.payload;
    },
    deleteSignleCartProduct: (state, action) => {
      state.allCartProducts.splice(action.payload, 1);
    },
    deleteCartProducts: (state) => {
      state.allCartProducts = [];
    },
  },
});

export const {
  addToCartProduct,
  addSingleProductDetail,
  deleteSignleCartProduct,
  deleteCartProducts,
} = addToCartSlice.actions;
export const selectCartProducts = (state) => state.addToCart.allCartProducts;
export const selectSingleProductDetail = (state) =>
  state.addToCart.singleProductDetail;

export default addToCartSlice.reducer;
