import { createSlice } from "@reduxjs/toolkit";

const customerSlice = createSlice({
  name: "customerStoreData",
  initialState: {
    customerData: [
      {
        id: 0,
        firstName: "",
        lastName: "",
        email: "",
        phoneNumber: "",
        address: "",
        createdTime: "",
      },
    ],
  },
  reducers: {
    setCustomerStoreData: (state, action) => {
      state.customerData = action.payload;
    },
  },
});

export const { setCustomerStoreData } = customerSlice.actions;
export default customerSlice.reducer;
