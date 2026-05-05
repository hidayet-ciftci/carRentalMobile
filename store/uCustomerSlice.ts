import { createSlice } from "@reduxjs/toolkit";

const uCustomerSlice = createSlice({
  name: "unloginCustomerData",
  initialState: { CustomerData: {} },
  reducers: {
    setData: (state, action) => {
      state.CustomerData = action.payload;
    },
  },
});

export const { setData } = uCustomerSlice.actions;
export default uCustomerSlice.reducer;
