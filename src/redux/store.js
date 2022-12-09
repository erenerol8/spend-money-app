import { configureStore } from "@reduxjs/toolkit";
import productSlicer from "./Product/productSlicer";

export const store = configureStore({
  reducer: {
    ProductSlice: productSlicer,
  },
});

export default store;
