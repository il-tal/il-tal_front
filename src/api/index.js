import axios from "axios";

const api = axios.create({
  baseURL: "http://3.35.205.228",
});

// api요청 주소가 login 또는 singup이 아닐 경우 로컬스토리지에 존재하는  access token 토큰을 가져온다.
// 가져온 토큰을 요청 headers에 담는다.
api.interceptors.request.use((config) => {
  const access_token = sessionStorage.getItem("access_token");
  const refresh_token = sessionStorage.getItem("refresh_token");

  if (access_token) {
    config.headers["Authorization"] = `${access_token}}`;
    config.headers["Refresh_Token"] = `${refresh_token}`;
  }
  return config;
});

export default api;

export const signUpForm = async (userData) => {
  const { data } = await api.post("/signup", userData);
  return data;
};

export const loginForm = async (userData) => {
  const data = await api.post("/login", userData);
  return data;
};

export const companyList = async (payload) => {
  const { data } = await api.get(
    `/companies?${payload.loc}&page=${payload.id}`
  );
  return data;
};

export const companyDetail = async () => {
  const { data } = await api.get("/company");
  return data;
};

export const companyLike = async (userData) => {
  const { data } = await api.post("/company/wish", userData);
  return data;
};

//업체상세페이지 GET요청
export const getDetailCompany = async (id) => {
  const { data } = await api.get(`/company/${id}`);
  return data;
};
