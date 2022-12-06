import styled from "styled-components";
import Comment from "./Comment";
import CommentForm from "./CommentForm";
import { useState } from "react";
import { getComment } from "../../api/ThemeApi";
import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import Pagination from "react-js-pagination";
import { commnetPages } from "../../api/store";
import { useRecoilState } from "recoil";
import nextgray from "../../asset/next-gray.png";
import prevgray from "../../asset/prev-gray.png";
import nextgreen from "../../asset/next-green.png";
import prevgreen from "../../asset/prev-green.png";
const ThemeReview = ({ props }) => {
  //코멘트 조회용 테마 id
  const { id } = useParams();

  //리뷰 작성하기 토글
  const [isEdit, setIsEdit] = useState(true);

  //댓글 페이지 전역 스테이트
  const [commentPage, setCommentPage] = useRecoilState(commnetPages);

  //코멘트 조회 useQuery
  const { data, isLoading } = useQuery(["getComments", commentPage], () =>
    getComment({ id, commentPage })
  );

  //댓글 더보기 state
  const [more, setMore] = useState(true);

  //코멘트 페이지네이션 온체인지
  const onCommentPage = (page) => {
    setCommentPage(page - 1);
  };

  //코멘트 로딩 처리
  if (isLoading) {
    return <div>댓글을 불러오는 중입니다...!</div>;
  }

  return (
    <Container>
      <ReviewHeader>
        <div className="review-score-wrap">
          <div className="review">리뷰({props.reviewCnt})</div>
          <div className="score">
            총 평점 :{" "}
            <span className="star">{"★".repeat(props.themeScore)}</span> (
            {props.themeScore})
          </div>
        </div>
        <span className="comment" onClick={() => setIsEdit(!isEdit)}>
          {isEdit ? "리뷰작성" : "취소"}
        </span>
      </ReviewHeader>
      <div className={isEdit ? "test2" : "test1"}>
        <CommentForm isEdit={isEdit} setIsEdit={setIsEdit} />
      </div>

      <ReviewWrap>
        {isLoading
          ? "loading..."
          : data.data.content.map((comment) => {
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
      </ReviewWrap>
      <div className="pagenation">
        {data.data.totalPages > 1 ? (
          <Pagination
            activePage={commentPage + 1}
            itemsCountPerPage={6}
            totalItemsCount={data.data.totalElements}
            pageRangeDisplayed={5}
            hideFirstLastPages={true}
            prevPageText={
              commentPage === 0 ? (
                <img src={prevgray} alt="next" />
              ) : (
                <img src={prevgreen} alt="next" />
              )
            }
            nextPageText={
              commentPage + 1 === data.data.totalPages ? (
                <img src={nextgray} alt="next" />
              ) : (
                <img src={nextgreen} alt="next" />
              )
            }
            onChange={onCommentPage}
          />
        ) : null}
      </div>
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
  .pagenation {
    .pagination {
      display: flex;
      justify-content: center;
      margin-top: 15px;
      align-items: center;
    }

    ul {
      list-style: none;
      padding: 0;
    }

    ul.pagination li {
      display: inline-block;
      width: 50px;
      height: 50px;
      /* border: 1px solid #e2e2e2; */
      display: flex;
      justify-content: center;
      align-items: center;
      font-size: 1rem;
    }

    ul.pagination li:first-child {
      border-radius: 5px 0 0 5px;
    }

    ul.pagination li:last-child {
      border-radius: 0 5px 5px 0;
    }

    ul.pagination li a {
      text-decoration: none;
      color: black;
      font-size: 24px;
    }

    ul.pagination li.active a {
      color: white;
    }

    ul.pagination li.active {
      /* scale: 1.3; */
      border-radius: 50% 50%;
      background-color: var(--color-main);
    }

    ul.pagination li a:hover {
      color: black;
    }
    ul.pagination li a.active {
      color: blue;
    }

    .page-selection {
      width: 48px;
      height: 30px;
      color: #337ab7;
    }
  }
`;

const ReviewWrap = styled.div`
  height: 100%;
  width: 100%;

  justify-content: space-between;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
`;
const ReviewHeader = styled.div`
  height: 20px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin: 20px 0 10px 0;
  align-items: center;

  .review-score-wrap {
    display: flex;
    font-size: 18px;

    .review {
      margin-right: 30px;
      display: flex;
      align-items: center;
      justify-content: center;
    }
    .score {
      display: flex;
      align-items: center;
      justify-content: center;
      .star {
        color: var(--color-main);
      }
    }
  }

  .comment {
    cursor: pointer;
    border: 1px solid grey;
    height: 30px;
    width: 120px;
    font-size: 16px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 8px;
  }
`;
