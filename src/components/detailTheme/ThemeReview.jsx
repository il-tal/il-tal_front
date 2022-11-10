import styled from "styled-components";
import Comment from "./Comment";
import CommentForm from "./CommentForm";
import { useState } from "react";
const ThemeReview = () => {
  const [isEdit, setIsEdit] = useState(true);
  return (
    <Container>
      {isEdit ? (
        <>
          {" "}
          <ReviewHeader>
            <span>리뷰</span>
            <span onClick={() => setIsEdit(false)}>리뷰작성</span>
          </ReviewHeader>
          <ReviewWrap>
            <span>전체 평점</span>
            <Comment />
            <Comment />
            <Comment />
            {/* 여기에 comment맵 돌리기 */}
          </ReviewWrap>
        </>
      ) : (
        <CommentForm isEdit={isEdit} setIsEdit={setIsEdit} />
      )}
    </Container>
  );
};

export default ThemeReview;

const Container = styled.div`
  height: 100%;
  width: 100%;
  background-color: grey;
`;

const ReviewWrap = styled.div`
  height: 100%;
  width: 100%;
  background-color: skyblue;
  display: flex;
  flex-direction: column;
`;
const ReviewHeader = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: space-between;
`;
