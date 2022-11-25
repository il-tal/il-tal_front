import api from "./index";
//

/** 성향 최초 등록 */
export const postTendency = async (userTend) => {
  const data = await api.post("/tendency", userTend);
  return data;
};
/** 성향 수정 */
export const editTendency = async (userTend) => {
  const data = await api.put("/tendency", userTend);
  return data;
};

export const editNickName = async (userName) => {
  const data = await api.put("/nickname", userName);
  return data;
};

export const reciveBadges = async (badgeId) => {
  const data = await api.post("/badge/give", badgeId);
  return data;
};

export const putMainBadge = async (badgeId) => {
  const data = await api.put(`/badge/${badgeId.badgeId}`, badgeId);
  return data;
};

export const getMyPage = async () => {
  const data = await api.get("/mypage");
  return data.data.data;
};

export const getMyTheme = async () => {
  const data = await api.get("/mythemes");
  return data.data.data;
};
export const getMyCompany = async () => {
  const data = await api.get("/mycompanies");
  return data.data.data;
};
export const getMyReview = async () => {
  const data = await api.get("/myreviews");
  return data.data.data;
};
export const getAllBadges = async () => {
  const data = await api.get("/badges");
  return data.data.data;
};
