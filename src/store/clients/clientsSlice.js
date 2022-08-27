import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { getAll, createUser } from '../../services/client.service';

const initialState = { clients: [], isLoading: false, error: '' };

export const fetchAllClients = createAsyncThunk(
  'clients/fetchAllClients',
  async () => {
    const allClients = await getAll();
    return allClients;
  }
);

export const addClient = createAsyncThunk(
  'clients/addNewClient',
  async newUser => {
    await createUser(newUser);
    return newUser;
  }
);

const fetchAllClientsFullfilledReducer = (state, { payload }) => {
  const { docs } = payload;
  const clients = docs.map(doc => ({ ...doc.data(), id: doc.id }));

  state.clients = clients;
  state.isLoading = false;
};

const addClientFullfilledReducer = (state, { payload }) => {
  state.isLoading = false;
  const newClientsList = [...state.clients, payload];
  state.clients = newClientsList;
};

const errorReducer = () => (state, action) => {
  state.error = action.error;
  state.isLoading = false;
};

const pendingReducer = state => {
  state.isLoading = true;
};

export const clientsSlice = createSlice({
  name: 'clients',
  initialState,
  reducers: {},
  extraReducers: {
    [fetchAllClients.fulfilled]: fetchAllClientsFullfilledReducer,
    [fetchAllClients.pending]: pendingReducer,
    [fetchAllClients.rejected]: errorReducer,
    [addClient.fulfilled]: addClientFullfilledReducer,
    [addClient.rejected]: errorReducer,
  },
});

export default clientsSlice.reducer;
