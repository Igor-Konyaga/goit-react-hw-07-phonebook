import { configureStore } from '@reduxjs/toolkit';
import { contactsReducer } from './contactsRedux';

export const store = configureStore({
  reducer: {
    contactsReducer,
  },
});

export default store;
