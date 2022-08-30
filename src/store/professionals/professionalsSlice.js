import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import {
  getAllProfessionals,
  createProfessional,
  deleteProfessional,
  updateProfessional,
} from '../../services/professional.service';

const initialState = { professionals: [], isLoading: false, error: '' };

export const getAllProfessionalsAction = createAsyncThunk(
  'professionals/getAllProfessionalsAction',
  async () => {
    const allProfessionals = await getAllProfessionals();
    return allProfessionals;
  }
);

export const createProfessionalAction = createAsyncThunk(
  'professionals/createProfessionalAction',
  async newProfessional => {
    await createProfessional(newProfessional);
    return newProfessional;
  }
);

export const deleteProfessionalAction = createAsyncThunk(
  'professionals/deleteProfessionalAction',
  async professionalDocId => {
    const deletedProfessionalId = await deleteProfessional(professionalDocId);
    return deletedProfessionalId;
  }
);

export const updateProfessionalAction = createAsyncThunk(
  'professionals/updateProfessionalAction',
  async ({ professionalBeingEditedId, newProfessionalProps }) => {
    const updatedProfessional = await updateProfessional({
      professionalBeingEditedId,
      newProfessionalProps,
    });
    return updatedProfessional;
  }
);

const updateProfessionalActionFullfilledReducer = (state, { payload }) => {
  const { professionalBeingEditedId, newProfessionalProps } = payload;
  const stateWithoutOldProfessional = state.professionals.filter(
    professional => professional.id !== professionalBeingEditedId
  );
  const stateWithNewestProfessional = [
    ...stateWithoutOldProfessional,
    { id: professionalBeingEditedId, ...newProfessionalProps },
  ];
  state.professionals = stateWithNewestProfessional;
  state.isLoading = false;
};

const deleteProfessionalActionFullfilledReducer = (state, { payload }) => {
  debugger;
  const professionalsAfterDelete = state.professionals.filter(
    professional => professional.id !== payload
  );

  state.professionals = professionalsAfterDelete;
};

const getAllProfessionalsActionFullfilledReducer = (state, { payload }) => {
  const { docs } = payload;
  const professionals = docs.map(doc => ({ ...doc.data(), id: doc.id }));

  state.professionals = professionals;
  state.isLoading = false;
};

const createProfessionalActionFullfilledReducer = (state, { payload }) => {
  state.isLoading = false;
  const newProfessionalsList = [...state.professionals, payload];
  state.professionals = newProfessionalsList;
};

const errorReducer = () => (state, action) => {
  state.error = action.error;
  state.isLoading = false;
};

const pendingReducer = state => {
  state.isLoading = true;
};

export const professionalsSlice = createSlice({
  name: 'professionals',
  initialState,
  reducers: {},
  extraReducers: {
    [createProfessionalAction.fulfilled]:
      createProfessionalActionFullfilledReducer,
    [createProfessionalAction.pending]: pendingReducer,
    [createProfessionalAction.rejected]: errorReducer,
    [deleteProfessionalAction.fulfilled]:
      deleteProfessionalActionFullfilledReducer,
    [deleteProfessionalAction.rejected]: errorReducer,
    [getAllProfessionalsAction.fulfilled]:
      getAllProfessionalsActionFullfilledReducer,
    [getAllProfessionalsAction.pending]: pendingReducer,
    [getAllProfessionalsAction.rejected]: errorReducer,
    [updateProfessionalAction.fulfilled]:
      updateProfessionalActionFullfilledReducer,
  },
});

export default professionalsSlice.reducer;
