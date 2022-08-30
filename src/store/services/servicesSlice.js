import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import {
  getAllServices,
  createService,
  deleteService,
  updateService,
} from '../../services/service.service';

const initialState = { services: [], isLoading: false, error: '' };

export const getAllServicesAction = createAsyncThunk(
  'services/getAllServicesAction',
  async () => {
    const allServices = await getAllServices();
    return allServices;
  }
);

export const createServiceAction = createAsyncThunk(
  'services/createServiceActionService',
  async newService => {
    await createService(newService);
    return newService;
  }
);

export const deleteServiceAction = createAsyncThunk(
  'services/deleteServiceAction',
  async serviceDocId => {
    const deletedServiceId = await deleteService(serviceDocId);
    return deletedServiceId;
  }
);

export const updateServiceAction = createAsyncThunk(
  'Services/updateServiceAction',
  async ({ serviceBeingEditedId, newServiceProps }) => {
    const updatedService = await updateService({
      serviceBeingEditedId,
      newServiceProps,
    });
    return updatedService;
  }
);

const updateServiceActionFullfilledReducer = (state, { payload }) => {
  const { serviceBeingEditedId, newServiceProps } = payload;
  const stateWithoutOldService = state.services.filter(
    service => service.id !== serviceBeingEditedId
  );
  const stateWithNewestService = [
    ...stateWithoutOldService,
    { id: serviceBeingEditedId, ...newServiceProps },
  ];
  state.services = stateWithNewestService;
  state.isLoading = false;
};

const deleteServiceActionFullfilledReducer = (state, { payload }) => {
  debugger;
  const servicesAfterDelete = state.services.filter(
    service => service.id !== payload
  );

  state.services = servicesAfterDelete;
};

const getAllServicesActionFullfilledReducer = (state, { payload }) => {
  const { docs } = payload;
  const services = docs.map(doc => ({ ...doc.data(), id: doc.id }));

  state.services = services;
  state.isLoading = false;
};

const createServiceActionFullfilledReducer = (state, { payload }) => {
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
    [createServiceAction.fulfilled]: createServiceActionFullfilledReducer,
    [createServiceAction.pending]: pendingReducer,
    [createServiceAction.rejected]: errorReducer,
    [deleteServiceAction.fulfilled]: deleteServiceActionFullfilledReducer,
    [deleteServiceAction.rejected]: errorReducer,
    [getAllServicesAction.fulfilled]: getAllServicesActionFullfilledReducer,
    [getAllServicesAction.pending]: pendingReducer,
    [getAllServicesAction.rejected]: errorReducer,
    [updateServiceAction.fulfilled]: updateServiceActionFullfilledReducer,
  },
});

export default servicesSlice.reducer;
