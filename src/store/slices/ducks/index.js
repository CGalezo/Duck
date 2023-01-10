import { createSlice } from "@reduxjs/toolkit";

export const duckSlice = createSlice({
  name: "ducks",
  initialState: {
    list: [],
  },
  reducers: {
    setDuckList: (state, action) => { // Set the ducks global state, in this way any component can use and watch the ducks created by user
      state.list = action.payload;
    },
  },
});

export const { setDuckList } = duckSlice.actions;

export default duckSlice.reducer;
