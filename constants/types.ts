export interface unloginCustomerDataTypes {
  address?: string;
  brand?: string;
  color?: string;
  viN_Number?: string;
  description?: string;
  email?: string;
  employer_Name?: string;
  fullName?: string;
  phoneNumber?: string;
  plate?: string;
  state?: string;
  price?: number | null;
  plannedEndDate?: string;
  endDate?: string;
  createdTime?: string;
}

export interface loginDataType {
  email: string;
  password: string;
}

export interface userDataType {
  id: number;
  firstName: string;
  lastName: string;
  email?: string | null;
  passwordHash: string | null;
  phoneNumber?: string | null;
  status: boolean;
  refreshToken?: null | string;
  refreshTokenExpiry?: null | string;
  createdTime?: string | null;
}

export interface userUpdateData {
  id: number;
  firstName: string;
  lastName: string;
  email?: string | null;
  passwordHash: string | null;
  phoneNumber?: string | null;
  status: boolean;
}

export interface newUserDataType {
  firstName: string;
  lastName: string;
  email?: string | null;
  password: string | null;
  phoneNumber?: string | null;
  roleId: number;
}

// ----- customerTypes -------

export interface customerDataType {
  id: number;
  firstName: string;
  lastName: string;
  email?: string | null;
  phoneNumber?: string | null;
  address?: string | null;
  createdTime?: string | null;
}
export interface customerUpdateDataType {
  id: number;
  firstName: string;
  lastName: string;
  email?: string | null;
  phoneNumber?: string | null;
  address?: string | null;
}

export interface NewcustomerDataType {
  firstName: string;
  lastName: string;
  email?: string | null;
  phoneNumber?: string | null;
  address?: string | null;
  createdTime?: string | null;
}
