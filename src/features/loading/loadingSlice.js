import { createSlice } from "@reduxjs/toolkit";

export const loadingSlice = createSlice({
  name: 'loading',
  initialState: {
    value: false
  },
  reducers: {
    showScreen: (state) => {
      state.value = true;
    },
    hideScreen: (state) => {
      state.value = false;
    }
  }
});

export const { showScreen, hideScreen } = loadingSlice.actions;

export default loadingSlice.reducer;