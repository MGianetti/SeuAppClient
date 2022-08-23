import { createSlice } from '@reduxjs/toolkit';

const initialState = { clients: [] };

export const clientsSlice = createSlice({
  name: 'clients',
  initialState,
  reducers: {
    newClient: (state, action) => {
      state.clients = [...state.clients, action.payload];
    },
    fetchAllClients: (state, action) => {
      state.clients = action.payload;
    },
  },
});

export const { newClient, fetchAllClients } = clientsSlice.actions;

export default clientsSlice.reducer;
