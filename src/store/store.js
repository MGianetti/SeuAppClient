import storeSynchronize from 'redux-localstore';
import { configureStore, combineReducers } from '@reduxjs/toolkit';

import clientsReducer from './clients/clientsSlice';
import productsReducer from './products/productsSlice';
import professionalsReducer from './professionals/professionalsSlice';
import servicesReducer from './services/servicesSlice';

const defaultReducer = combineReducers({
  clients: clientsReducer,
  products: productsReducer,
  professionals: professionalsReducer,
  services: servicesReducer,
});

const store = configureStore({
  reducer: defaultReducer,
});

export default store;

storeSynchronize(store);
