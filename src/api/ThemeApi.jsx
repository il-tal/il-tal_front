import api from "./index";

export const getThemes = async () => {
  const { data } = await api.get("/themes");
  return data;
};

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
    // `/themes?location=${location}&genre=${genre}&page=${pageParam}`
    //&themeScore=${score}
  );
  return data;
};

// `/themes?location=${location}&genre=${genre}&score=${score}&people=${people}&difficulty=${difficulty}&page=${pageParam}`

export const getDetailTheme = async (id) => {
  console.log("겟요청 파람", id);
  const { data } = await api.get(`/theme/${id}`);
  return data;
};

export const postComment = async (payload) => {
  const { data } = await api.post(`/theme/${payload.id}/review`, payload.data);
  return data;
};

export const getComment = async (id) => {
  const { data } = await api.get(`/theme/${id}/reviews`);
  return data;
};

export const putComment = async (payload) => {
  const { data } = await api.put(`/theme/review/${payload.id}`, payload.data);
  return data;
};

export const delComment = async (id) => {
  const { data } = await api.delete(`/theme/review/${id}`);
  return data;
};

export const wishTheme = async (payload) => {
  const { data } = await api.post("/theme/wish", payload);
  return data;
};
