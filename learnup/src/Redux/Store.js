import { configureStore } from '@reduxjs/toolkit';
import { UserReducer } from './reducers/userReducer.js';

const Store = configureStore({
  reducer: {
    user: UserReducer,
  },
});
export default Store;
export const server = 'https://plum-angry-moose.cyclic.app/api/v1';
