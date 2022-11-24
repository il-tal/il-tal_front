import { axiosIns } from "./axios";

// 


/** 성향 최초 등록 */
export const postTendency = async () => {

}
/** 성향 수정 */
export const editTendency = async () => {

}

export const editNickName = async (userName) => {
  const data = await axiosIns.put("/nickname",userName);
  return data;
}

export const reciveBadges = async (badgeId) => {
  const data = await axiosIns.post("/badge/give", badgeId);
  return data;
}

export const putMainBadge = async (badgeId) => {
  const data = await axiosIns.put(`/badge/${badgeId.badgeId}`, badgeId);
  return data;
}

export const getMyPage = async () => {
  const data = await axiosIns.get("/mypage");
  return data.data.data;
}

export const getMyTheme = async () => {
  const data  = await axiosIns.get("/mythemes");
  return data.data.data;
}
export const getMyCompany = async () => {
  const data = await axiosIns.get("/mycompanies");
  return data.data.data;
}
export const getMyReview = async () => {
  const data = await axiosIns.get("/myreviews");
  return data.data.data;
}
export const getAllBadges = async () => {
  const data = await axiosIns.get("/badges");
  return data.data.data;
}