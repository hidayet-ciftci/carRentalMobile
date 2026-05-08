import axiosClient from "./axiosClient";
import { customerUpdateDataType, NewcustomerDataType } from "./types";

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
  const url = `${process.env.EXPO_PUBLIC_API_URL}/api/Customers/delete-many`;
  try {
    const res = await axiosClient.delete(url, { data: customerIds });
    const data = res.data;
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const createCustomer = async (customer: NewcustomerDataType) => {
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
  const url = `${process.env.EXPO_PUBLIC_API_URL}/api/Customers/customer-detail/${customerId}`;
  try {
    const res = await axiosClient.get(url);
    const data = res.data;
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const updateCustomer = async (customer: customerUpdateDataType) => {
  const url = `${process.env.EXPO_PUBLIC_API_URL}/api/Customers`;
  try {
    const res = await axiosClient.put(url, customer);
    const data = res.data;
    return data;
  } catch (error) {
    console.log(error);
  }
};
