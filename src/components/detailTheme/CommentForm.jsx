import styled from "styled-components";
import SelectBox from "./SelectBox";
import { useState } from "react";
import SelectIndex from "./SelectIndex";
const CommentForm = ({ setIsEdit, isEdit }) => {
  const [test, setTest] = useState();
  const onChangeHandler = (e) => {
    const { name, value } = e.target;
    setTest({ ...test, [name]: value });
    console.log(test);
  };

  return (
    <Container>
      <FormWrap>
        <FormHeaderWrap>
          <SelectBox
            name="star"
            props={SelectIndex.optionStar}
            onChangeHandler={onChangeHandler}
          />
          <SelectBox
            name="level"
            props={SelectIndex.optionLevel}
            onChangeHandler={onChangeHandler}
          />
          <SelectBox
            name="hint"
            props={SelectIndex.optionHint}
            onChangeHandler={onChangeHandler}
          />
          <DateInput name="date" type="date" onChange={onChangeHandler} />
        </FormHeaderWrap>
        <TextInput name="comment" onChange={onChangeHandler} />
      </FormWrap>
      <BtnWrap>
        <Btn onClick={() => setIsEdit(true)}>취소</Btn>
        <Btn>완료</Btn>
      </BtnWrap>
    </Container>
  );
};

export default CommentForm;

const Container = styled.div`
  height: 100%;
  width: 100%;
`;
const DateInput = styled.input`
  height: 26px;
  width: 110px;
`;
const TextInput = styled.textarea`
  height: 200px;
  width: 700px;
`;
const FormHeaderWrap = styled.div`
  height: 100%;
  width: 100%;
`;
const FormWrap = styled.div`
  height: 100%;
  width: 100%;
`;

const BtnWrap = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
`;
const Btn = styled.div`
  height: 30px;
  width: 90px;
  background-color: white;
  margin: 10px;
`;
