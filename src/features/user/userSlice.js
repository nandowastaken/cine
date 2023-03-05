import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: 'user',
  initialState: {
    value: '',
    profileOptions: false,
  },
  reducers: {
    setUser: (state, action) => {
      state.value = action.payload;
    },
    toggleProfileOptions: (state) => {
      state.profileOptions = !state.profileOptions;
    },
    closeProfileOptions: (state) => {
      state.profileOptions = false;
    }
  }
});

export const { setUser, toggleProfileOptions, closeProfileOptions } = userSlice.actions;

export default userSlice.reducer;