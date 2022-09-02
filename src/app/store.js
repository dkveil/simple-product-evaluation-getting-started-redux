import { configureStore } from '@reduxjs/toolkit';
import ratesReducer from '../features/ratesSlice'

export const store = configureStore({
  reducer: {
    rates: ratesReducer
  },
});
