import { createSlice } from '@reduxjs/toolkit';

const initialState = { professionals: [] };

export const professionalsSlice = createSlice({
  name: 'professionals',
  initialState,
  reducers: {
    newProfessionals: (state, action) => {
      state.professionals = [...state.professionals, action.payload];
    },
    fetchAllProfessionals: (state, action) => {
      state.professionals = action.payload;
    },
  },
});

export const { newProfessionals, fetchAllProfessionals } =
  professionalsSlice.actions;

export default professionalsSlice.reducer;
