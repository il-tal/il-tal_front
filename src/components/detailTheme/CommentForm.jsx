import styled from "styled-components";
import SelectBox from "./SelectBox";
import { useState } from "react";
import SelectIndex from "./SelectIndex";
const CommentForm = ({ setIsEdit, isEdit }) => {
  const initial = {
    star: "",
    success: "",
    level: "",
    hint: "",
    date: "",
    comment: "",
  };

  const [test, setTest] = useState(initial);
  const onChangeHandler = (e) => {
    const { name, value } = e.target;
    setTest({ ...test, [name]: value });
    console.log(test);
  };
  const onSubmitHandler = () => {
    if (test.star === "") {
      alert("별점을 입력해주세요!");
    } else if (test.success === "") {
      alert("성공/실패 여부를 체크해주세요!");
    } else if (test.level === "") {
      alert("난이도는 어떠셨나요?");
    } else if (test.hint === "") {
      alert("힌트는 몇개 사용하셨나요?");
    } else if (test.date === "") {
      alert("언제 탈출에 도전했는지 알려주실래요?");
    } else if (test.comment === "") {
      alert("해당 테마가 어땠는지 후기로 공유해볼까요?");
    }
  };

  return (
    <Container>
      <FormWrap>
        <FormHeaderWrap>
          <div>
            <SelectBox
              name="star"
              props={SelectIndex.optionStar}
              onChangeHandler={onChangeHandler}
            />
            <SelectBox
              name="success"
              props={SelectIndex.success}
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
          </div>

          <Btn onClick={() => onSubmitHandler()}>작성완료</Btn>
        </FormHeaderWrap>
        <TextInput name="comment" onChange={onChangeHandler} />
      </FormWrap>
    </Container>
  );
};

export default CommentForm;

const Container = styled.div`
  height: 200px;
  width: 100%;
  border: 1px solid;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 10px 0;
`;
const DateInput = styled.input`
  height: 26px;
  width: 100px;
`;
const TextInput = styled.textarea`
  height: 150px;
  width: 850px;
  margin: 10px 0;
  border: 1px solid grey;
  resize: none;
`;
const FormHeaderWrap = styled.div`
  height: 50px;
  width: 95%;

  display: flex;
  justify-content: space-between;
  align-items: center;
  div {
    display: flex;
  }
`;
const FormWrap = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`;

const Btn = styled.div`
  height: 30px;
  width: 100px;
  background-color: teal;

  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 14px;
`;
