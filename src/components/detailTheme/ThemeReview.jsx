import styled from "styled-components";
import Comment from "./Comment";
import CommentForm from "./CommentForm";
import { useState } from "react";
import { getComment } from "../../api/ThemeApi";
import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
const ThemeReview = () => {
  //코멘트 조회용 테마 id
  const { id } = useParams();

  //리뷰 작성하기 토글
  const [isEdit, setIsEdit] = useState(true);

  //코멘트 조회 useQuery
  const { data, isLoading, isError, error } = useQuery(["getComments"], () =>
    getComment(id)
  );

  //코멘트 로딩 처리
  if (isLoading) {
    return <div>댓글을 불러오는 중입니다...!</div>;
  }
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
        {data.data.map((comment) => {
          return (
            <Comment
              key={comment.id}
              id={comment.id}
              nickname={comment.nickname}
              playDate={comment.playDate}
              score={comment.score}
              success={comment.success}
              difficulty={comment.difficulty}
              hint={comment.hint}
              comment={comment.comment}
            />
          );
        })}
        {/* <Comment />
        <Comment />
        <Comment /> */}
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
