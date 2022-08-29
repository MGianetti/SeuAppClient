import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { getAll, createProduct } from '../../services/product.service';

const initialState = { products: [], isLoading: false, error: '' };

export const fetchAllProducts = createAsyncThunk(
  'products/fetchAllProducts',
  async () => {
    const allProducts = await getAll();
    return allProducts;
  }
);

export const addProduct = createAsyncThunk(
  'products/addNewProduct',
  async newProduct => {
    await createProduct(newProduct);
    return newProduct;
  }
);

const fetchAllProductsFullfilledReducer = (state, { payload }) => {
  const { docs } = payload;
  const products = docs.map(doc => ({ ...doc.data(), id: doc.id }));

  state.products = products;
  state.isLoading = false;
};

const addProductFullfilledReducer = (state, { payload }) => {
  state.isLoading = false;
  const newProductsList = [...state.products, payload];
  state.products = newProductsList;
};

const errorReducer = () => (state, action) => {
  state.error = action.error;
  state.isLoading = false;
};

const pendingReducer = state => {
  state.isLoading = true;
};

export const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {},
  extraReducers: {
    [fetchAllProducts.fulfilled]: fetchAllProductsFullfilledReducer,
    [fetchAllProducts.pending]: pendingReducer,
    [fetchAllProducts.rejected]: errorReducer,
    [addProduct.fulfilled]: addProductFullfilledReducer,
    [addProduct.rejected]: errorReducer,
  },
});

export default productsSlice.reducer;
