import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import {
  getAllClients,
  createClient,
  deleteClient,
  updateClient,
} from '../../services/client.service';

const initialState = { clients: [], isLoading: false, error: '' };

export const getAllClientsAction = createAsyncThunk(
  'clients/getAllClientsAction',
  async () => {
    const allClients = await getAllClients();
    return allClients;
  }
);

export const createClientAction = createAsyncThunk(
  'clients/createClientAction',
  async newUser => {
    await createClient(newUser);
    return newUser;
  }
);

export const deleteClientAction = createAsyncThunk(
  'clients/deleteClientAction',
  async clientDocId => {
    const deletedClientId = await deleteClient(clientDocId);
    return deletedClientId;
  }
);

export const updateClientAction = createAsyncThunk(
  'clients/updateClientAction',
  async ({ clientBeingEditedId, newClientProps }) => {
    const updatedClient = await updateClient({
      clientBeingEditedId,
      newClientProps,
    });
    return updatedClient;
  }
);

const updateClientActionFullfilledReducer = (state, { payload }) => {
  const { clientBeingEditedId, newClientProps } = payload;
  const stateWithoutOldClient = state.clients.filter(
    client => client.id !== clientBeingEditedId
  );
  const stateWithNewestClient = [
    ...stateWithoutOldClient,
    { id: clientBeingEditedId, ...newClientProps },
  ];
  state.clients = stateWithNewestClient;
  state.isLoading = false;
};

const deleteClientActionFullfilledReducer = (state, { payload }) => {
  debugger;
  const clientsAfterDelete = state.clients.filter(
    client => client.id !== payload
  );

  state.clients = clientsAfterDelete;
};

const getAllClientsActionFullfilledReducer = (state, { payload }) => {
  const { docs } = payload;
  const clients = docs.map(doc => ({ ...doc.data(), id: doc.id }));

  state.clients = clients;
  state.isLoading = false;
};

const createClientActionFullfilledReducer = (state, { payload }) => {
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
    [createClientAction.fulfilled]: createClientActionFullfilledReducer,
    [createClientAction.pending]: pendingReducer,
    [createClientAction.rejected]: errorReducer,
    [deleteClientAction.fulfilled]: deleteClientActionFullfilledReducer,
    [deleteClientAction.rejected]: errorReducer,
    [getAllClientsAction.fulfilled]: getAllClientsActionFullfilledReducer,
    [getAllClientsAction.pending]: pendingReducer,
    [getAllClientsAction.rejected]: errorReducer,
    [updateClientAction.fulfilled]: updateClientActionFullfilledReducer,
  },
});

export default clientsSlice.reducer;
