import { axiosIns } from "./axios";

// 
export const getAchieve = async () => {
  const { data } = await axiosIns.get("/main/achieve");
  return data.data;
};

export const getBest = async () => {
  const data  = await axiosIns.get("/main/best");
  return data.data.data;
};

export const getRandom = async () => {
  const data  = await axiosIns.get("/main/random");
  return data.data.data;
};