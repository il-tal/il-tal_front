import api from "./index";

export const getThemes = async () => {
  const { data } = await api.get("/themes");
  return data;
};

//테마 페이지 테마리스트 GET요청 (무한스크롤)
export const getFilterTheme = async ({
  genre,
  location,
  score,
  people,
  difficulty,
  pageParam,
}) => {
  const { data } = await api.get(
    `/themes?location=${location}&genreFilter=${genre}&people=${people}&themeScore=${score}&difficulty=${difficulty}&page=${pageParam}`
  );
  return data;
};

//디테일테마 페이지 테마리스트 GET요청
export const getDetailTheme = async (id) => {
  console.log("겟요청 파람", id);
  const { data } = await api.get(`/theme/${id}`);
  return data;
};

//디테일테마 페이지 댓글작성 POST요청
export const postComment = async (payload) => {
  const { data } = await api.post(`/theme/${payload.id}/review`, payload.data);
  return data;
};

//디테일테마 페이지 댓글조회 GET요청
export const getComment = async (id) => {
  const { data } = await api.get(`/theme/${id}/reviews`);
  return data;
};

//디테일테마 페이지 댓글수정 PUT요청
export const putComment = async (payload) => {
  const { data } = await api.put(`/theme/review/${payload.id}`, payload.data);
  return data;
};

//디테일테마 페이지 댓글삭제 DELETE요청
export const delComment = async (id) => {
  const { data } = await api.delete(`/theme/review/${id}`);
  return data;
};

//테마&디테일테마 페이지 찜하기 POST요청
export const wishTheme = async (payload) => {
  const { data } = await api.post("/theme/wish", payload);
  return data;
};
