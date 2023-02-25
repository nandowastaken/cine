import { createSlice, current } from "@reduxjs/toolkit";

export const votingSlice = createSlice({
  name: 'voting',
  initialState: {
    value: []
  },
  reducers: {
    vote: (state, action) => {
      const voting = action.payload;
      const votes = state.value;

      const votedInCategoryIndex = 
        votes.findIndex(el => el.category === voting.category);
      if (votedInCategoryIndex !== -1) {
        state.value[votedInCategoryIndex] = voting;
      } else {
        state.value.push(voting);
      }
    }
  }
});

export const { vote } = votingSlice.actions;

export default votingSlice.reducer;