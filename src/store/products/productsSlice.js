import { createSlice } from '@reduxjs/toolkit';

const initialState = { products: [] };

export const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    newProduct: (state, action) => {
      state.products = [...state.products, action.payload];
    },
    fetchAllProducts: (state, action) => {
      state.products = action.payload;
    },
  },
});

export const { newProduct, fetchAllProducts } = productsSlice.actions;

export default productsSlice.reducer;
