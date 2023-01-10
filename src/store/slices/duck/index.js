import { createSlice } from "@reduxjs/toolkit";

export const duckSlice = createSlice({
  name: "duck",
  initialState: { // Initial state
    value: {},
  },
  reducers: {
    setDuck: (state, action) => { // Set the duck to edit
      state.value = action.payload;
    },
  },
});

export const { setDuck } = duckSlice.actions;

export default duckSlice.reducer;
