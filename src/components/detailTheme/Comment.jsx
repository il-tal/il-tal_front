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
import Swal from "sweetalert2";

//오늘 날짜 (month는 0~11을 출력하므로 +1 필요)
const today = new Date();
const date =
  today.getFullYear() + "-" + (today.getMonth() + 1) + "-" + today.getDate();

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
  };

  //댓글 수정 mutation
  const editComment = useMutation(
    ({ id: id, data: editValue }) => putComment({ id: id, data: editValue }),
    {
      onSuccess: () => {
        queryClient.invalidateQueries(["getComments"]);
        queryClient.invalidateQueries(["getDetail"]);
        Swal.fire({
          icon: "success",
          title: "댓글이 수정되었습니다",
          text: "다른 유저분들이 더욱 자세한 사항을 알게되었네요!👍",
        });
        setIsEdit(false);
      },
    }
  );

  //댓글 삭제 mutation
  const deleteComment = useMutation((id) => delComment(id), {
    onSuccess: () => {
      queryClient.invalidateQueries(["getComments"]);
      queryClient.invalidateQueries(["getDetail"]);
      Swal.fire({
        icon: "success",
        title: "댓글이 삭제되었습니다",
        text: "더 좋은 댓글 남겨주실거죠?😊",
      });
    },
    onError: () => {
      Swal.fire({
        icon: "error",
        title: "댓글삭제에 실패하였습니다",
        text: "페이지를 새로고침 후 다시 이용해보세요!",
      });
    },
  });

  //댓글 삭제 Swal
  const onDelete = () => {
    Swal.fire({
      title: "댓글을 삭제하시겠습니까?",
      text: "지워진 댓글은 되돌릴 수 없어요😢",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "삭제",
      cancelButtonText: "취소",
    }).then((result) => {
      if (result.isConfirmed) {
        deleteComment.mutate(id);
      }
    });
  };

  //save버튼 누를 시 서버에 PUT 요청 보내기 및 데이터 유무 확인처리
  const onSubmitHandler = () => {
    if (editValue.score === "") {
      Swal.fire({
        icon: "warning",
        title: "별점을 입력해 주세요",
        text: "얼마나 재미있었는지 별점으로 알려주세요!",
      });
    } else if (editValue.success === "") {
      Swal.fire({
        icon: "warning",
        title: "성공여부를 체크해 주세요",
        text: "해당 테마를 성공하셨는지 알려주시겠어요?😊",
      });
    } else if (editValue.difficulty === "") {
      Swal.fire({
        icon: "warning",
        title: "난이도를 입력해 주세요",
        text: "얼마나 어려웠는지 평가해주세요! 🙋‍♂️",
      });
    } else if (editValue.hint === "") {
      Swal.fire({
        icon: "warning",
        title: "힌트사용개수를 입력해 주세요",
        text: "힌트는 얼마나 사용하셨나요? 😎",
      });
    } else if (editValue.playDate === "") {
      Swal.fire({
        icon: "warning",
        title: "날짜를 입력해 주세요",
        text: "해당 테마를 플레이한 날짜가 언제인가요? 😊",
      });
    } else if (editValue.comment === "") {
      Swal.fire({
        icon: "warning",
        title: "내용을 입력해 주세요",
        text: "테마를 이용한 생생한 경험, 모두에게 들려주세요! 👍👍",
      });
    } else {
      editComment.mutate({ id: id, data: editValue });
    }
  };
  return (
    <Container>
      {userinfo ? (
        userinfo.nickname === nickname ? (
          <>
            <div className="del" onClick={() => onDelete()}>
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
        ) : null
      ) : null}

      <Header>
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
            <input
              type="date"
              name="playDate"
              onChange={onChangeEdit}
              defaultValue={playDate}
              max={date}
            />
          </div>
        ) : (
          <>
            <div className="nick">{nickname}</div>
            <div className="date">플레이날짜 {playDate}</div>
          </>
        )}
      </Header>

      <Middle>
        {isEdit ? (
          <div className="edit-text-wrap">
            <textarea
              maxLength={150}
              className="edit-text"
              name="comment"
              defaultValue={comment}
              onChange={onChangeEdit}
            />
          </div>
        ) : (
          <>
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
            <div className="score">{"★".repeat(score)}</div>
          </>
        )}
      </Middle>

      {isEdit ? null : (
        <Body>
          <div>{comment}</div>
        </Body>
      )}
    </Container>
  );
};

export default Comment;

const Container = styled.div`
  height: 200px;
  width: 700px;
  border: 1px solid var(--color-border);
  margin: 15px 0;
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  border-radius: 8px;
  padding: 5px;
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
    height: 100%;
    width: 100%;
    .edit-text {
      display: flex;
      width: 625px;
      height: 90px;
      margin: 10px auto;
      padding: 10px;
      box-sizing: border-box;
      resize: none;
      border: none;
      border-radius: 8px;
      background-color: #efefef;

      :focus {
        outline: none;
      }
    }
  }

  .edit-select {
    width: 625px;
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 auto;
    box-sizing: border-box;
    padding-right: 3px;
    select {
      width: 115px;
      border-radius: 8px;
      border: 1px solid var(--color-border);
    }
    input {
      width: 110px;
      font-size: 20;
      height: 29px;
      border-radius: 8px;
      border: 1px solid var(--color-border);
    }
  }
`;

const Header = styled.div`
  height: 50px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 auto;

  .nick {
    font-size: 24px;
    font-weight: bold;

    margin: 10px;
  }
  .date {
    font-size: 16px;
    margin-right: 10px;
  }
`;
const Middle = styled.div`
  height: 50px;
  width: 100%;
  display: flex;
  align-items: center;

  div {
    font-size: 16px;
  }
  .clear {
    margin-left: 10px;
  }
  .score {
    color: var(--color-main);
    margin-left: 10px;
    font-size: 18px;
  }
  .difficulty {
    margin-left: 10px;
  }
  .hint {
    margin-left: 10px;
  }
`;
const Body = styled.div`
  height: 100%;
  width: 100%;

  font-size: 20px;
  div {
    height: 80px;
    width: 660px;
    margin: 10px;
    word-wrap: break-word;
  }
`;
