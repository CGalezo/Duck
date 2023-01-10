import { configureStore } from "@reduxjs/toolkit";

// Reducers
import images from "./slices/images";
import ducks from "./slices/ducks";
import liked from "./slices/liked";
import duck from "./slices/duck";

export const store = configureStore({
  reducer: { // Store for reducers
    images,
    ducks,
    liked,
    duck,
  },
});
