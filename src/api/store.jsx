import { atom } from "recoil";

//Recoil로 만든 전역상태 보관 Store

//장르필터 전역 스테이트
export const genreState = atom({
  key: "genreState",
  default: [],
});

//지역필터 전역 스테이트
export const locationState = atom({
  key: "locationState",
  default: [],
});

//인원필터 전역 스테이트
export const peopleState = atom({
  key: "peopleState",
  default: [],
});

//별점필터 전역 스테이트
export const scoreState = atom({
  key: "scoreState",
  default: [0, 5],
});

//난이도필터 전역 스테이트
export const difficultyState = atom({
  key: "difficultyState",
  default: [1, 5],
});

//업체별 지역필터 전역 스테이트
export const companyLocation = atom({
  key: "companyLocation",
  default: "",
});

//업체별 페이지 전역 스테이트
export const companyPages = atom({
  key: "companyPage",
  default: 0,
});

//
export const headerClicked = atom({
  key: "clicked",
  default: 0,
});

//테마별 페이지 전역 스테이트
export const themePages = atom({
  key: "themePages",
  default: 0,
});

//로그인 유무 판별 스테이트
export const loginCheck = atom({
  key: "loginCheck",
  default: false,
});

//테마페이지 정렬 스테이트
export const sortState = atom({
  key: "sort",
  default: "reviewCnt",
});

//테마페이지 정렬 토글 스테이트
export const onSortState = atom({
  key: "onSort",
  default: "review",
});

//검색어 스테이트
export const serchState = atom({
  key: "serchState",
  default: "",
});

//검색 테마 페이지 전역 스테이트
export const serchThemePages = atom({
  key: "serchThemePage",
  default: 0,
});

//검색 업체 페이지 전역 스테이트
export const serchComPages = atom({
  key: "serchComPage",
  default: 0,
});

//댓글 페이지 전역 스테이트
export const commnetPages = atom({
  key: "commentPages",
  default: 0,
});
