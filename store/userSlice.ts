import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "userStoreData",
  initialState: {
    userData: [
      {
        id: 0,
        firstName: "",
        lastName: "",
        email: "",
        passwordHash: "",
        phoneNumber: "",
        status: true,
        refreshToken: "",
        refreshTokenExpiry: "",
        createdTime: "",
        roleName: "",
      },
    ],
  },
  reducers: {
    setUserStoreData: (state, action) => {
      state.userData = action.payload;
    },
  },
});

export const { setUserStoreData } = userSlice.actions;
export default userSlice.reducer;
