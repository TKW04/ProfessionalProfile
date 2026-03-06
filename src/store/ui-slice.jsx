import { createSlice } from "@reduxjs/toolkit";

const initialAuthState = {
  showMenu: false,
  notification: null,
  isMobile: false,
};

const UISlice = createSlice({
  name: "UI",
  initialState: initialAuthState,
  reducers: {
    showNotification(state, action) {
      state.notification = {
        status: action.payload.status,
        title: action.payload.title,
        message: action.payload.message,
        timer: 5000,
      };
    },
    hideNotification(state) {
      state.notification = null;
    },
    setIsMobile(state, action) {
      state.isMobile = action.payload.isMobile;
    }
  },
});
export const uiActions = UISlice.actions;
export default UISlice;
