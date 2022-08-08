import storeSynchronize from 'redux-localstore';
import { configureStore, combineReducers } from '@reduxjs/toolkit';

const defaultReducer = combineReducers({});

const store = configureStore({
  reducer: defaultReducer,
});

export default store;

storeSynchronize(store);
