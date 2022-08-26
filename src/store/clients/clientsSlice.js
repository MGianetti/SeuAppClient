import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { doc } from 'firebase/firestore';
import { getAll } from '../../services/client.service';

const initialState = { clients: [], loading: false, error: '' };

export const fetchAllClients = createAsyncThunk(
  'clients/fetchAllClients',
  async () => {
    const allClients = await getAll();
    return allClients;
  }
);

export const clientsSlice = createSlice({
  name: 'clients',
  initialState,
  reducers: {},
  extraReducers: {
    [fetchAllClients.fulfilled]: (state, action) => {
      const { docs } = action.payload;
      const clients = docs.map(doc => ({ ...doc.data(), id: doc.id }));
      state.clients = clients;
      state.loading = false;
    },
    [fetchAllClients.rejected]: (state, action) => {
      state.error = action.error;
      state.loading = false;
    },
    [fetchAllClients.pending]: (state, action) => {
      state.loading = true;
    },
  },
});

export default clientsSlice.reducer;
