import styled from "styled-components";
import Comment from "./Comment";
import CommentForm from "./CommentForm";
import { useState } from "react";
const ThemeReview = () => {
  const [isEdit, setIsEdit] = useState(true);
  return (
    <Container>
      <ReviewHeader>
        <span>리뷰</span>
        <span className="comment" onClick={() => setIsEdit(!isEdit)}>
          {isEdit ? "리뷰작성" : "취소"}
        </span>
      </ReviewHeader>
      <div className={isEdit ? "test2" : "test1"}>
        <CommentForm isEdit={isEdit} setIsEdit={setIsEdit} />
      </div>

      {/* {isEdit ? null : <CommentForm isEdit={isEdit} setIsEdit={setIsEdit} />} */}

      <ReviewWrap>
        <Comment />
        <Comment />
        <Comment />
        {/* 여기에 comment맵 돌리기 */}
      </ReviewWrap>
    </Container>
  );
};

export default ThemeReview;

const Container = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  .test1 {
    height: 400px;
    max-height: 300px;
    width: 100%;
    display: flex;

    transition: all 1s ease-in-out;
    overflow: hidden;
  }
  .test2 {
    width: 100%;
    display: flex;
    height: 0;
    overflow: hidden;
    transition: all 0.5s ease-in-out;
  }
`;

const ReviewWrap = styled.div`
  height: 100%;
  width: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;
`;
const ReviewHeader = styled.div`
  height: 20px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin: 20px 0 10px 0;

  .comment {
    cursor: pointer;
  }
`;
