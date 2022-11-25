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

export const headerClicked = atom({
  key: "clicked",
  default: 0,
});
