import axiosClient from "./axiosClient";
import { SCDataType } from "./types";

export const fetchServiceRecords = async () => {
  const url = `${process.env.EXPO_PUBLIC_API_URL}/api/ServiceRecords`;
  try {
    const res = await axiosClient.get(url);
    const data = res.data;
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const createServiceRecord = async (SC: SCDataType) => {
  const url = `${process.env.EXPO_PUBLIC_API_URL}/api/ServiceRecords`;
  const { id, ...restOfServiceRecord } = SC;
  console.log(new Date(SC.plannedEndDate ?? "0").toISOString());

  try {
    const res = await axiosClient.post(url, restOfServiceRecord);
    const data = res.data;
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const getSCById = async (SCId: string | string[]) => {
  const url = `${process.env.EXPO_PUBLIC_API_URL}/api/ServiceRecords/service-record-detail/${SCId}`;
  try {
    const res = await axiosClient.get(url);
    const data = res.data;
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const updateServiceRecord = async (SC: SCDataType) => {
  const url = `${process.env.EXPO_PUBLIC_API_URL}/api/ServiceRecords`;
  try {
    const res = await axiosClient.put(url, SC);
    const data = res.data;
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const deleteSCById = async (SCIds: number[]) => {
  const url = `${process.env.EXPO_PUBLIC_API_URL}/api/ServiceRecords/delete-many`;
  try {
    const res = await axiosClient.delete(url, { data: SCIds });
    const data = res.data;
    return data;
  } catch (error) {
    console.log(error);
  }
};
