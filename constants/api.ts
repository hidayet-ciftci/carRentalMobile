import axiosClient from "./axiosClient";
import { userDataType } from "./types";

export const getCustomerDetail = async (email: string) => {
  const url = `${process.env.EXPO_PUBLIC_API_URL}/api/ServiceRecords/OneServiceDetails`;
  try {
    const response = await fetch(url, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(email),
    });
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};

/* export const getToken = async (loginData: loginDataType) => {
  const url = `${process.env.EXPO_PUBLIC_API_URL}/api/Auth/login`;
  try {
    const response = await fetch(url, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(loginData),
    });
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};
 */

export const fetchUsers = async () => {
  const url = `${process.env.EXPO_PUBLIC_API_URL}/api/Users`;
  try {
    const res = await axiosClient.get(url);
    const data = res.data;
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const createUser = async (user: userDataType) => {
  const url = `${process.env.EXPO_PUBLIC_API_URL}/api/Users`;
  try {
    const res = await axiosClient.post(url, user);
    const data = res.data;
    return data;
  } catch (error) {
    console.log(error);
  }
};
