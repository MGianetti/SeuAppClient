import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import {
  getAll,
  createProfessional,
} from '../../services/professional.service';

const initialState = { professionals: [], isLoading: false, error: '' };

export const fetchAllProfessionals = createAsyncThunk(
  'professionals/fetchAllProfessionals',
  async () => {
    const allServices = await getAll();
    return allServices;
  }
);

export const addProfessional = createAsyncThunk(
  'professionals/addNewProfessional',
  async newProfessional => {
    await createProfessional(newProfessional);
    return newProfessional;
  }
);

const fetchAllProfessionalFullfilledReducer = (state, { payload }) => {
  const { docs } = payload;
  const professionals = docs.map(doc => ({ ...doc.data(), id: doc.id }));

  state.professionals = professionals;
  state.isLoading = false;
};

const addProfessionalFullfilledReducer = (state, { payload }) => {
  state.isLoading = false;
  const newProfessionalList = [...state.professionals, payload];
  state.professionals = newProfessionalList;
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
    [fetchAllProfessionals.fulfilled]: fetchAllProfessionalFullfilledReducer,
    [fetchAllProfessionals.pending]: pendingReducer,
    [fetchAllProfessionals.rejected]: errorReducer,
    [addProfessional.fulfilled]: addProfessionalFullfilledReducer,
    [addProfessional.rejected]: errorReducer,
  },
});

export default professionalsSlice.reducer;
