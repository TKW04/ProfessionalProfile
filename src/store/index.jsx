import { configureStore } from "@reduxjs/toolkit";
import profileSlice from "./profile-store/profile-slice";

const store = configureStore({
  reducer: {
    profile: profileSlice.reducer,
  },
});

export default store;
