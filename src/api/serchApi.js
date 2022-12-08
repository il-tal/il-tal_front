import api from "./index";

export const getSerchTheme = async ({ serchWord, serchThemePage }) => {
  const { data } = await api.get(
    `/themes/search?themeName=${serchWord}&page=${serchThemePage}`
  );
  return data;
};

export const getSerchCompany = async ({ serchWord, serchComPage }) => {
  const { data } = await api.get(
    `companies/search?companyName=${serchWord}&page=${serchComPage}`
  );
  return data;
};
