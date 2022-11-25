import styled from "styled-components";
import SelectBox from "./SelectBox";
import { useState } from "react";
import SelectIndex from "./SelectIndex";
import { useMutation, useQuery } from "@tanstack/react-query";
import { getComment, postComment } from "../../api/ThemeApi";
import { useParams } from "react-router-dom";
import { useQueryClient } from "@tanstack/react-query";
const CommentForm = ({ setIsEdit, isEdit }) => {
  //댓글 데이터 스테이트 초기값
  const initial = {
    score: "",
    success: "",
    difficulty: "",
    hint: "",
    playDate: "",
    comment: "",
  };
  //useQuery refetch해주는거
  const queryClient = useQueryClient();

  //댓글 작성시 테마 id값을 보내기 위해 사용
  const { id } = useParams();

  //댓글 작성시 사용할 데이터 스테이트
  const [cmt, setCmt] = useState(initial);

  //댓글 작성 이벤트 값 스테이트에 저장
  const onChangeHandler = (e) => {
    const { name, value } = e.target;
    setCmt({ ...cmt, [name]: value });
  };

  //작성완료 버튼 누를 시 서버에 POST요청 보내기 및 데이터 유무 확인처리
  const onSubmitHandler = () => {
    if (cmt.score === "") {
      alert("별점을 입력해주세요!");
    } else if (cmt.success === "") {
      alert("성공/실패 여부를 체크해주세요!");
    } else if (cmt.difficulty === "") {
      alert("난이도는 어떠셨나요?");
    } else if (cmt.hint === "") {
      alert("힌트는 몇개 사용하셨나요?");
    } else if (cmt.playDate === "") {
      alert("언제 탈출에 도전했는지 알려주실래요?");
    } else if (cmt.comment === "") {
      alert("해당 테마가 어땠는지 후기로 공유해볼까요?");
    } else {
      writheComment.mutate({ id: id, data: cmt });
    }
  };

  //댓글 작성 mutaion
  const writheComment = useMutation(
    ({ id: id, data: cmt }) => postComment({ id: id, data: cmt }),
    {
      onSuccess: () => {
        queryClient.invalidateQueries(["getComments", "getDetail"]);

        alert("댓글 작성 완료!");
        setIsEdit(true);
        setCmt(initial);
      },
      onError: () => {
        alert("댓글 작성 오류!! 다시 시도하세요!");
        setCmt(initial);
      },
    }
  );
  console.log("스테이트", cmt);

  return (
    <Container>
      <FormWrap>
        <FormHeaderWrap>
          <div>
            <SelectBox
              name="score"
              props={SelectIndex.optionStar}
              onChangeHandler={onChangeHandler}
              value={cmt.score}
            />
            <SelectBox
              name="success"
              props={SelectIndex.success}
              onChangeHandler={onChangeHandler}
              value={cmt.success}
            />
            <SelectBox
              name="difficulty"
              props={SelectIndex.optionLevel}
              onChangeHandler={onChangeHandler}
              value={cmt.difficulty}
            />
            <SelectBox
              name="hint"
              props={SelectIndex.optionHint}
              onChangeHandler={onChangeHandler}
              value={cmt.hint}
            />

            <DateInput
              name="playDate"
              type="date"
              onChange={onChangeHandler}
              value={cmt.playDate}
            />
          </div>

          <Btn onClick={() => onSubmitHandler()}>작성완료</Btn>
        </FormHeaderWrap>
        <TextInput
          name="comment"
          onChange={onChangeHandler}
          value={cmt.comment}
        />
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
  width: 1370px;
  margin: 10px 0;
  border: 1px solid grey;
  resize: none;
  padding: 5px;
  box-sizing: border-box;
  font-size: 15px;
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
  background-color: black;
  color: white;
  cursor: pointer;

  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 14px;
`;
