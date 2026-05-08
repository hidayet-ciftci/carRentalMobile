import axiosClient from "./axiosClient";
import { userDataType, userUpdateData } from "./types";

export const fetchCustomers = async () => {
  const url = `${process.env.EXPO_PUBLIC_API_URL}/api/Customers`;
  try {
    const res = await axiosClient.get(url);
    const data = res.data;
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const deleteByIdsCustomer = async (customerIds: number[]) => {
  const url = `${process.env.EXPO_PUBLIC_API_URL}/api/Users/delete-many`;
  try {
    const res = await axiosClient.delete(url, { data: customerIds });
    const data = res.data;
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const createCustomer = async (customer: userDataType) => {
  const url = `${process.env.EXPO_PUBLIC_API_URL}/api/Customers`;
  try {
    const res = await axiosClient.post(url, customer);
    const data = res.data;
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const getByIdCustomer = async (customerId: string | string[]) => {
  const url = `${process.env.EXPO_PUBLIC_API_URL}/api/Users/user-detail/${customerId}`;
  try {
    const res = await axiosClient.get(url);
    const data = res.data;
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const updateCustomer = async (customer: userUpdateData) => {
  const url = `${process.env.EXPO_PUBLIC_API_URL}/api/Customers`;
  try {
    const res = await axiosClient.put(url, customer);
    const data = res.data;
    return data;
  } catch (error) {
    console.log(error);
  }
};
