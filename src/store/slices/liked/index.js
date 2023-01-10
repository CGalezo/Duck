import { createSlice } from "@reduxjs/toolkit";

export const likedSlice = createSlice({
  name: "liked",
  initialState: {
    list: [],
  },
  reducers: {
    setLikedList: (state, action) => { // Set the global state for liked ducks images
      state.list = action.payload;
    },
  },
});

export const { setLikedList } = likedSlice.actions;

export default likedSlice.reducer;
