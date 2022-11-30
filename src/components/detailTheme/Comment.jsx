import styled from "styled-components";
import {
  AiOutlineEdit,
  AiOutlineSave,
  AiOutlineDelete,
  AiOutlineClose,
} from "react-icons/ai";
import { useState } from "react";
import SelectBox from "./SelectBox";
import SelectIndex from "./SelectIndex";
import { useMutation } from "@tanstack/react-query";
import { delComment, putComment } from "../../api/ThemeApi";
import { useQueryClient } from "@tanstack/react-query";

const Comment = ({
  id,
  nickname,
  playDate,
  score,
  success,
  difficulty,
  hint,
  comment,
}) => {
  //수정시 초기값을 원래 댓글에 입력했던 값으로 설정
  const editInitial = {
    comment: comment,
    difficulty: difficulty,
    hint: hint,
    success: success,
    playDate: playDate,
    score: score,
  };

  //유즈쿼리의 키값을 확인해서 refetch해주는 함수
  const queryClient = useQueryClient();

  //수정모드 토글 스테이트
  const [isEdit, setIsEdit] = useState(false);

  //본인 글 인지 판별하기 위한 유저정보
  const userinfo = JSON.parse(sessionStorage.getItem("userinfo"));

  //수정시 사용할 데이터 스테이트
  const [editValue, setEditValue] = useState(editInitial);

  //글 수정 이벤트 값 스테이트에 저장
  const onChangeEdit = (e) => {
    const { name, value } = e.target;
    setEditValue({ ...editValue, [name]: value });
    console.log("수정글", editValue);
  };

  //댓글 수정 mutation
  const editComment = useMutation(
    ({ id: id, data: editValue }) => putComment({ id: id, data: editValue }),
    {
      onSuccess: () => {
        queryClient.invalidateQueries(["getComments"]);
        queryClient.invalidateQueries(["getDetail"]);
        setIsEdit(false);
      },
    }
  );

  //댓글 삭제 mutation
  const deleteComment = useMutation((id) => delComment(id), {
    onSuccess: () => {
      queryClient.invalidateQueries(["getComments"]);
      queryClient.invalidateQueries(["getDetail"]);
    },
  });

  //save버튼 누를 시 서버에 PUT 요청 보내기 및 데이터 유무 확인처리
  const onSubmitHandler = () => {
    if (editValue.score === "") {
      alert("별점을 입력해주세요!");
    } else if (editValue.success === "") {
      alert("성공/실패 여부를 체크해주세요!");
    } else if (editValue.difficulty === "") {
      alert("난이도는 어떠셨나요?");
    } else if (editValue.hint === "") {
      alert("힌트는 몇개 사용하셨나요?");
    } else if (editValue.playDate === "") {
      alert("언제 탈출에 도전했는지 알려주실래요?");
    } else if (editValue.comment === "") {
      alert("해당 테마가 어땠는지 후기로 공유해볼까요?");
    } else {
      editComment.mutate({ id: id, data: editValue });
    }
  };
  return (
    <Container>
      {userinfo.nickname === nickname ? (
        <>
          <div className="del" onClick={() => deleteComment.mutate(id)}>
            <AiOutlineDelete />
          </div>
          <div className="edit" onClick={() => setIsEdit(!isEdit)}>
            {isEdit ? <AiOutlineClose /> : <AiOutlineEdit />}
          </div>
          {isEdit ? (
            <div className="save" onClick={onSubmitHandler}>
              <AiOutlineSave />
            </div>
          ) : null}
        </>
      ) : null}
      <Header>
        <div className="nick">{nickname}</div>
        <div className="date">
          {isEdit ? (
            <input
              type="date"
              name="playDate"
              onChange={onChangeEdit}
              defaultValue={playDate}
            />
          ) : (
            `플레이날짜 ${playDate}`
          )}
        </div>
      </Header>
      {isEdit ? (
        <div className="edit-select">
          <SelectBox
            name="success"
            props={SelectIndex.success}
            value={editValue.success}
            onChangeHandler={onChangeEdit}
          />
          <SelectBox
            name="difficulty"
            props={SelectIndex.optionLevel}
            value={editValue.difficulty}
            onChangeHandler={onChangeEdit}
          />
          <SelectBox
            name="hint"
            props={SelectIndex.optionHint}
            value={editValue.hint}
            onChangeHandler={onChangeEdit}
          />
          <SelectBox
            name="score"
            props={SelectIndex.optionStar}
            value={editValue.score}
            onChangeHandler={onChangeEdit}
          />
        </div>
      ) : (
        <Middle>
          <div className="clear">{success ? "성공" : "실패"}</div>
          <div className="difficulty">
            {difficulty === 3
              ? "어려웠어요"
              : difficulty === 2
              ? "보통이에요"
              : "쉬웠어요"}
          </div>
          <div className="hint">
            {hint === 5 ? "힌트 5회 이상" : `힌트 ${hint}회`}
          </div>
          <div className="score">{"⭐".repeat(score)}</div>
        </Middle>
      )}
      {isEdit ? (
        <div className="edit-text-wrap">
          <textarea
            className="edit-text"
            name="comment"
            defaultValue={comment}
            onChange={onChangeEdit}
          />
        </div>
      ) : (
        <Body>
          <span>{comment}</span>
        </Body>
      )}
    </Container>
  );
};

export default Comment;

const Container = styled.div`
  height: 200px;
  width: 650px;
  /* border: 1px solid grey; */
  margin: 15px 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  .del {
    position: absolute;

    width: 30px;
    height: 30px;
    right: 0;
    bottom: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 3px;
    font-size: 25px;
  }
  .edit {
    position: absolute;

    width: 30px;
    height: 30px;
    right: 40px;
    bottom: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 3px;
    font-size: 25px;
  }
  .save {
    position: absolute;

    width: 30px;
    height: 30px;
    right: 80px;
    bottom: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 3px;
    font-size: 25px;
  }
  .edit-text-wrap {
    display: flex;
    justify-content: flex-start;
    height: 150px;
    width: 100%;
    .edit-text {
      display: flex;
      width: 625px;
      height: 90px;
      margin: 10px auto;
      padding: 10px;
      box-sizing: border-box;
      resize: none;

      :focus {
        outline: 1px solid grey;
      }
    }
  }

  .edit-select {
    position: absolute;
    top: 11px;
    left: 70px;
    display: flex;
    select {
      width: 100px;
      border-radius: 8px;
    }
  }
`;

const Header = styled.div`
  height: 50px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;

  .nick {
    font-size: 18px;
    font-weight: bold;

    margin: 10px;
  }
  .date {
    font-size: 13px;
    margin-right: 10px;
    input {
      height: 27px;
      border-radius: 8px;
      border: 1px solid grey;
    }
  }
`;
const Middle = styled.div`
  height: 45px;
  width: 100%;
  display: flex;
  div {
    margin-left: 10px;
    font-size: 13px;
  }
`;
const Body = styled.div`
  height: 100px;
  width: 100%;

  font-size: 15px;
  span {
    margin: 10px;
  }
`;
