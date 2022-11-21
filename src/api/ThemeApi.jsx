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
  if (genre === "전체") {
    genre = null;
  } else if (location === "전체") {
    location = null;
  } else if (score === "전체") {
    score = null;
  } else if (people === "전체") {
    people = null;
  } else if (difficulty === "전체") {
    difficulty = null;
  }

  const { data } = await api.get(
    `/themes?&location=${location}&genre=${genre}&score${score}&people=${people}&difficulty=${difficulty}&page=${pageParam}`
  );
  return data;
};
