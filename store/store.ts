import { configureStore } from "@reduxjs/toolkit";
import uCustomerReducer from "./uCustomerSlice";

export const store = configureStore({
  reducer: {
    unloginCustomerData: uCustomerReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
