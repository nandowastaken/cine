import { configureStore } from "@reduxjs/toolkit";

import votingReducer from '../features/voting/votingSlice';
import loadingReducer from '../features/loading/loadingSlice';

export default configureStore({
  reducer: {
    voting: votingReducer,
    loading: loadingReducer,
  },
});