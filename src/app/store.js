import { configureStore } from "@reduxjs/toolkit";

import loadingReducer from '../features/loading/loadingSlice';
import userReducer from '../features/user/userSlice';
import votingReducer from '../features/voting/votingSlice';

export default configureStore({
  reducer: {
    loading: loadingReducer,
    user: userReducer,
    voting: votingReducer,
  },
});