import { configureStore } from "@reduxjs/toolkit";
import homeSlice from "./homeSlice";

// Setting up the Store with connecttion from homeSlices
export const store = configureStore({
  reducer: {
    home: homeSlice,
  },
});
