import axios from "axios";

const api = axios.create({
  baseURL: `${process.env.REACT_APP_AXIOS_API}`,
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

//회원가입, 아이디 및 닉네임 중복확인 POST 요청
export const signUpForm = async (userData) => {
  const { data } = await api.post("/signup", userData);
  return data;
};

//로그인 POST 요청
export const loginForm = async (userData) => {
  const data = await api.post("/login", userData);
  return data;
};

//업체페이지 GET 요청
export const companyList = async ({ comPage, comLocation }) => {
  const { data } = await api.get(`/companies?${comLocation}&page=${comPage}`);
  return data;
};

//업체&업체상세 찜하기 POST 요청
export const companyWish = async (userData) => {
  const { data } = await api.post("/company/wish", userData);
  return data;
};

//업체상세페이지 GET 요청
export const getDetailCompany = async (id) => {
  const { data } = await api.get(`/company/${id}`);
  return data;
};

//카카오 로그인 인가코드 GET 요청
export const kakaologin = async (kakaocode) => {
  const data = await api.get(`/kakao/callback?code=${kakaocode}`);
  return data;
};

//아이디 중복확인 POST 요청
export const dupUsername = async (username) => {
  const data = await api.post("/username", { username: username });
  return data;
};

//닉네임 중복확인 POST 요청
export const dupNickname = async (nickname) => {
  const data = await api.post("/nickname", { nickname: nickname });
  return data;
};
