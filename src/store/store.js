import storeSynchronize from 'redux-localstore';
import { configureStore, combineReducers } from '@reduxjs/toolkit';
import { firebaseReducer } from 'react-redux-firebase';

import clientsReducer from './clients/clientsSlice';
import productsReducer from './products/productsSlice';
import professionalsReducer from './professionals/professionalsSlice';
import servicesReducer from './services/servicesSlice';
const defaultReducer = combineReducers({
  clients: clientsReducer,
  products: productsReducer,
  professionals: professionalsReducer,
  services: servicesReducer,
  firebase: firebaseReducer,
});

const store = configureStore({
  reducer: defaultReducer,
  middleware: getDefaultMiddleware => getDefaultMiddleware(),
});

export default store;

storeSynchronize(store);
