import { createSlice } from "@reduxjs/toolkit";

const vehicleSlice = createSlice({
  name: "vehicleStoreData",
  initialState: {
    VehicleData: [
      {
        id: 0,
        brand: "",
        color: "",
        customerId: 0,
        plate: "",
        viN_Number: "",
        createdTime: "",
      },
    ],
  },
  reducers: {
    setVehicleStoreData: (state, action) => {
      state.VehicleData = action.payload;
    },
  },
});

export const { setVehicleStoreData } = vehicleSlice.actions;
export default vehicleSlice.reducer;
