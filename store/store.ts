import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./authSlice";
import uCustomerReducer from "./uCustomerSlice";

export const store = configureStore({
  reducer: {
    unloginCustomerData: uCustomerReducer,
    auth: authReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
