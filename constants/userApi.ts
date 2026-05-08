import axiosClient from "./axiosClient";
import { userDataType, userUpdateData } from "./types";

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

export const getIdUser = async (userId: string | string[]) => {
  const url = `${process.env.EXPO_PUBLIC_API_URL}/api/Users/user-detail/${userId}`;
  try {
    const res = await axiosClient.get(url);
    const data = res.data;
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const updateUser = async (user: userUpdateData) => {
  const url = `${process.env.EXPO_PUBLIC_API_URL}/api/Users`;
  try {
    const res = await axiosClient.put(url, user);
    const data = res.data;
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const deleteByIdUser = async (userIds: number[]) => {
  const url = `${process.env.EXPO_PUBLIC_API_URL}/api/Users/delete-many`;
  try {
    const res = await axiosClient.delete(url, { data: userIds });
    const data = res.data;
    return data;
  } catch (error) {
    console.log(error);
  }
};
