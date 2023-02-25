import { createSlice } from "@reduxjs/toolkit";

export const votingSlice = createSlice({
  name: 'voting',
  initialState: {
    value: []
  },
  reducers: {
    vote: (state, action) => {
      console.log(action);
    }
  }
});

export const { vote } = votingSlice.actions;

export default votingSlice.reducer;