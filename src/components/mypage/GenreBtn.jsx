import { useState } from "react";
import styled from "styled-components";

const GenreBtn = ({ categoryIndex, state, setState }) => {
  const categoryHandler = (e) => {
    const isInclude = state.find((element) => element === e.target.value);
    if (isInclude) {
      setState(state.filter((element) => element !== e.target.value));
    } else {
      setState([...state, e.target.value]);
    }
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

export default GenreBtn;

const Btn = styled.button`
  min-width: 80px;
  max-width: 100px;
  display: inline-block;
  height: 35px;
  margin: 3px;
  font-size: 16px;
  color: ${({ backgroundColor }) => (backgroundColor ? "white" : "black")};
  background-color: ${({ backgroundColor }) =>
    backgroundColor ? "#06C387" : "#fff"};
  border: 1px solid #e5e5e5;
  border-radius: 8px;
  outline: none;
  cursor: pointer;
  padding: 0 10px;

  &:hover {
    color: #333;
    color: ${({ backgroundColor }) => (backgroundColor ? "white" : "black")};
    background-color: ${({ backgroundColor }) =>
      backgroundColor ? "#06C387" : "#e6e6e6"};
    border-color: grey;
  }
`;
