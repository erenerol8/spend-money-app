import { createSlice } from "@reduxjs/toolkit";
import productjson from "../../products.json";

const items = productjson.items;

export const productSlicer = createSlice({
  name: "product",
  initialState: {
    initialBudget: 1000000,
    currentBudget: 1000000,
    product: items,
  },
  reducers: {},
});

export default productSlicer.reducer;
