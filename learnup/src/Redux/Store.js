import { configureStore } from '@reduxjs/toolkit';
import { courseReducer } from './reducers/courseReducer.js';
import { profileReducer, UserReducer } from './reducers/userReducer.js';

const Store = configureStore({
  reducer: {
    user: UserReducer,
    profile: profileReducer,
    course: courseReducer,
  },
});
export default Store;
export const server = 'https://plum-angry-moose.cyclic.app/api/v1';
