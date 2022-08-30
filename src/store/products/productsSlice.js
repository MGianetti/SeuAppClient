import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import {
  getAllProducts,
  createProduct,
  deleteProduct,
  updateProduct,
} from '../../services/product.service';

const initialState = { products: [], isLoading: false, error: '' };

export const getAllProductsAction = createAsyncThunk(
  'products/getAllProductsAction',
  async () => {
    const allProducts = await getAllProducts();
    return allProducts;
  }
);

export const createProductAction = createAsyncThunk(
  'products/createProductAction',
  async newProduct => {
    await createProduct(newProduct);
    return newProduct;
  }
);

export const deleteProductAction = createAsyncThunk(
  'products/deleteProductAction',
  async productDocId => {
    const deletedProductId = await deleteProduct(productDocId);
    return deletedProductId;
  }
);

export const updateProductAction = createAsyncThunk(
  'products/updateProductAction',
  async ({ productBeingEditedId, newProductProps }) => {
    const updatedProduct = await updateProduct({
      productBeingEditedId,
      newProductProps,
    });
    return updatedProduct;
  }
);

const updateProductActionFullfilledReducer = (state, { payload }) => {
  const { productBeingEditedId, newProductProps } = payload;
  const stateWithoutOldProduct = state.products.filter(
    product => product.id !== productBeingEditedId
  );
  const stateWithNewestProduct = [
    ...stateWithoutOldProduct,
    { id: productBeingEditedId, ...newProductProps },
  ];
  state.products = stateWithNewestProduct;
  state.isLoading = false;
};

const deleteProductActionFullfilledReducer = (state, { payload }) => {
  debugger;
  const productsAfterDelete = state.products.filter(
    product => product.id !== payload
  );

  state.products = productsAfterDelete;
};

const getAllProductsActionFullfilledReducer = (state, { payload }) => {
  const { docs } = payload;
  const products = docs.map(doc => ({ ...doc.data(), id: doc.id }));

  state.products = products;
  state.isLoading = false;
};

const createProductActionFullfilledReducer = (state, { payload }) => {
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
    [createProductAction.fulfilled]: createProductActionFullfilledReducer,
    [createProductAction.pending]: pendingReducer,
    [createProductAction.rejected]: errorReducer,
    [deleteProductAction.fulfilled]: deleteProductActionFullfilledReducer,
    [deleteProductAction.rejected]: errorReducer,
    [getAllProductsAction.fulfilled]: getAllProductsActionFullfilledReducer,
    [getAllProductsAction.pending]: pendingReducer,
    [getAllProductsAction.rejected]: errorReducer,
    [updateProductAction.fulfilled]: updateProductActionFullfilledReducer,
  },
});

export default productsSlice.reducer;
