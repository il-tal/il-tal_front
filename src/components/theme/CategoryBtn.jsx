import { useEffect } from "react";
import styled from "styled-components";

const CategoryBtn = ({ categoryIndex, state, setState }) => {
  useEffect(() => {
    if (state.length === 0) {
      setState(["전체"]);
    }
  }, [state]);

  const categoryHandler = (e) => {
    const isInclude = state.find((element) => element === e.target.value);

    if (e.target.value === "전체") {
      setState(["전체"]);
    } else if (isInclude) {
      setState(state.filter((element) => element !== e.target.value));
    } else if (state.length > 0) {
      setState([
        ...state.filter((element) => element !== "전체"),
        e.target.value,
      ]);
    }
  };

  return (
    <>
      {categoryIndex.map((element) => (
        <Btn
          key={element.value}
          type="button"
          onClick={categoryHandler}
          value={element.value}
          backgroundColor={state.find((el) => el === element.value)}
        >
          {element.value}
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
