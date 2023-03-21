import { configureStore } from '@reduxjs/toolkit';
import { adminReducer } from './reducers/adminReducer.js';
import { courseReducer } from './reducers/courseReducer.js';
import { otherReducer } from './reducers/otherReducer.js';
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
    admin: adminReducer,
    other: otherReducer,
  },
});
export default Store;
export const server = 'https://plum-angry-moose.cyclic.app/api/v1';
