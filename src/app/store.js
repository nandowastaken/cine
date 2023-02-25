import { configureStore } from "@reduxjs/toolkit";

import votingReducer from '../features/voting/votingSlice';

export default configureStore({
  reducer: {
    voting: votingReducer,
  },
});