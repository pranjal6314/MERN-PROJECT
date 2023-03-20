import { configureStore } from '@reduxjs/toolkit';
import { courseReducer } from './reducers/courseReducer.js';
import {
  profileReducer,
  subscriptionReducer,
  UserReducer,
} from './reducers/userReducer.js';

const Store = configureStore({
  reducer: {
    user: UserReducer,
    profile: profileReducer,
    course: courseReducer,
    subscription: subscriptionReducer,
  },
});
export default Store;
export const server = 'https://plum-angry-moose.cyclic.app/api/v1';
