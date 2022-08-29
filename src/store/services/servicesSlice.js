import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { getAll, createService } from '../../services/service.service';

const initialState = { services: [], isLoading: false, error: '' };

export const fetchAllServices = createAsyncThunk(
  'services/fetchAllServices',
  async () => {
    const allServices = await getAll();
    return allServices;
  }
);

export const addService = createAsyncThunk(
  'services/addNewService',
  async newService => {
    await createService(newService);
    return newService;
  }
);

const fetchAllServicesFullfilledReducer = (state, { payload }) => {
  const { docs } = payload;
  const services = docs.map(doc => ({ ...doc.data(), id: doc.id }));

  state.services = services;
  state.isLoading = false;
};

const addServiceFullfilledReducer = (state, { payload }) => {
  state.isLoading = false;
  const newServicesList = [...state.services, payload];
  state.services = newServicesList;
};

const errorReducer = () => (state, action) => {
  state.error = action.error;
  state.isLoading = false;
};

const pendingReducer = state => {
  state.isLoading = true;
};

export const servicesSlice = createSlice({
  name: 'services',
  initialState,
  reducers: {},
  extraReducers: {
    [fetchAllServices.fulfilled]: fetchAllServicesFullfilledReducer,
    [fetchAllServices.pending]: pendingReducer,
    [fetchAllServices.rejected]: errorReducer,
    [addService.fulfilled]: addServiceFullfilledReducer,
    [addService.rejected]: errorReducer,
  },
});

export default servicesSlice.reducer;
