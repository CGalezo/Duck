import { createSlice } from "@reduxjs/toolkit";

export const imageSlice = createSlice({
  name: "images",
  initialState: {
    list: [],
  },
  reducers: {
    setImageList: (state, action) => { // Set the global state for ducks images
      state.list = action.payload;
    },
  },
});

export const { setImageList } = imageSlice.actions;

export default imageSlice.reducer;
