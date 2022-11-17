// SelectBox에 사용되는 Index 목록

const SelectIndex = {
  optionStar: [
    { value: "", name: "별점" },
    { value: 1, name: "⭐" },
    { value: 2, name: "⭐⭐" },
    { value: 3, name: "⭐⭐⭐" },
    { value: 4, name: "⭐⭐⭐⭐" },
    { value: 5, name: "⭐⭐⭐⭐⭐" },
  ],

  optionLevel: [
    { value: "", name: "난이도" },
    { value: 3, name: "상" },
    { value: 2, name: "중" },
    { value: 1, name: "하" },
  ],

  optionHint: [
    { value: "", name: "힌트" },
    { value: 0, name: "0회" },
    { value: 1, name: "1회" },
    { value: 2, name: "2회" },
    { value: 3, name: "3회" },
    { value: 4, name: "4회" },
    { value: 5, name: "5회이상" },
  ],
  success: [
    { value: "", name: "성공여부" },
    { value: true, name: "성공" },
    { value: false, name: "실패" },
  ],
};

export default SelectIndex;
