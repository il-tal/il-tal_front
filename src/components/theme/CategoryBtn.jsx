import { useEffect } from "react";
import styled from "styled-components";

const CategoryBtn = ({ categoryIndex, state, setState }) => {
  // useEffect(() => {
  //   if (state.length === 0) {
  //     setState([]);
  //   }
  // }, [state]);

  const categoryHandler = (e) => {
    //해당 State에 클릭한 카테고리가 있는지 확인한다. (있다면 클릭한 카테고리를 반환하고, 없다면 undefinded가 됨)
    const isInclude = state.find((element) => element === e.target.value);
    console.log("isInclude", isInclude);

    //만약 클릭한 카테고리가 "전체" 인 경우 state는 "전체" 로 바꾼다.
    if (e.target.name === "전체") {
      setState([]);

      //만약 isInclude가 값이 있다면 (클릭해제를 하려는것과 같은 의미), state에서 클릭한 카테고리만 제외시킴
    } else if (isInclude) {
      setState(state.filter((element) => element !== e.target.value));

      // state에 "전체"가 있다면 "전체"를 state에서 빼내고 나머지 클릭한 값들을 넣어줌
    } else {
      setState([...state.filter((element) => element !== ""), e.target.value]);
    }
    console.log("네임값", e.target.value, "스테이트", state);
  };

  return (
    <>
      {categoryIndex.map((element) => (
        <Btn
          name={element.name}
          key={element.name}
          type="button"
          onClick={categoryHandler}
          value={element.value}
          backgroundColor={state.find((el) => el === `${element.value}`)}
        >
          {element.name}
        </Btn>
      ))}
    </>
  );
};
export default CategoryBtn;

const Btn = styled.button`
  margin: 3px;
  font-size: 12px;
  color: ${({ backgroundColor }) => (backgroundColor ? "white" : "black")};
  background-color: ${({ backgroundColor }) =>
    backgroundColor ? "#428bca" : "#fff"};
  border: 1px solid #e5e5e5;
  border-radius: 4px;
  outline: none;
  cursor: pointer;

  &:hover {
    color: #333;
    color: ${({ backgroundColor }) => (backgroundColor ? "white" : "black")};
    background-color: ${({ backgroundColor }) =>
      backgroundColor ? "#428bca" : "#e6e6e6"};
    border-color: #adadad;
  }
`;
