// SelectBox에 사용되는 Index 목록

const SelectIndex = {
  optionStar: [
    { value: null, name: "별점을 선택하세요" },
    { value: 1, name: "⭐" },
    { value: 2, name: "⭐⭐" },
    { value: 3, name: "⭐⭐⭐" },
    { value: 4, name: "⭐⭐⭐⭐" },
    { value: 5, name: "⭐⭐⭐⭐⭐" },
  ],

  optionLevel: [
    { value: null, name: "난이도를 선택하세요" },
    { value: 3, name: "상" },
    { value: 2, name: "중" },
    { value: 1, name: "하" },
  ],

  optionHint: [
    { value: null, name: "힌트 사용횟수" },
    { value: 1, name: "1회" },
    { value: 2, name: "2회" },
    { value: 3, name: "3회" },
    { value: 4, name: "4회" },
    { value: 5, name: "5회" },
    { value: 99, name: "6회 이상" },
  ],
};

export default SelectIndex;
