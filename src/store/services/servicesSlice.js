import { createSlice } from '@reduxjs/toolkit';

const initialState = { services: [] };

export const services = createSlice({
  name: 'services',
  initialState,
  reducers: {
    newService: (state, action) => {
      state.services = [...state.services, action.payload];
    },
    fetchAllServices: (state, action) => {
      state.services = action.payload;
    },
  },
});

export const { newService, fetchAllServices } = services.actions;

export default services.reducer;
