import styled from "styled-components";
import ThemePoster from "./ThemePoster";
import ThemeFilter from "./ThemeFilter";
import { useQuery } from "@tanstack/react-query";
import { getFilterCnt, getFilterTheme } from "../../api/ThemeApi";
import { useRecoilState, useRecoilValue } from "recoil";
import {
  difficultyState,
  genreState,
  locationState,
  peopleState,
  scoreState,
  sortState,
  themePages,
} from "../../api/store";

import Pagination from "react-js-pagination";
import { useEffect } from "react";

import nextgray from "../../asset/next-gray.png";
import prevgray from "../../asset/prev-gray.png";
import nextgreen from "../../asset/next-green.png";
import prevgreen from "../../asset/prev-green.png";

const ThemeList = () => {
  //페이지 전역상태
  const [themePagenation, setThemePage] = useRecoilState(themePages);

  //전역변수로 선언된 각 필터 스테이트를 값만 불러서 사용 (useRecoilValue사용)
  const genre = useRecoilValue(genreState);
  const location = useRecoilValue(locationState);
  const people = useRecoilValue(peopleState);
  const score = useRecoilValue(scoreState);
  const difficulty = useRecoilValue(difficultyState);

  //정렬 전역 스테이트
  const [sort, setSort] = useRecoilState(sortState);

  //페이징처리된 데이터 받아오기
  const { data, isError, error, isLoading, refetch } = useQuery(
    ["getThemes", themePagenation],
    () =>
      getFilterTheme({
        genre,
        location,
        score,
        people,
        difficulty,
        themePagenation,
        sort,
      })
  );
  //정렬 토글
  const onChangeSort = (e) => {
    setSort(e.target.value);
  };

  //정렬 트리거 함수 (onChangeSort가 실행되어 sort가 변할때 마다 refetch시킴)
  useEffect(() => {
    refetch();
  }, [refetch, sort]);

  //페이지네이션이 눌릴때마다 themePage를 페이지에 맞게 설정
  const onPageHandler = (page) => {
    setThemePage(page - 1);
  };

  //필터링된 테마 개수 미리보기 API GET요청
  const filterCnt = useQuery(
    ["getFilterCnt", genre, location, score, people, difficulty],
    () => getFilterCnt({ genre, location, score, people, difficulty })
  );

  // 로딩 및 에러 처리
  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error! {error.toString()}</div>;

  return (
    <Container>
      <div className="filter-label">
        <div className="label">필터</div>

        <ThemeFilter refetch={refetch} filterCnt={filterCnt} />
      </div>
      <div className="theme-label">
        <div className="label-sort-wrap">
          <div className="label">검색결과 {data.data.totalElements}개</div>
          <div className="sort-wrap">
            <input
              type="radio"
              className="radio-btn"
              value="reviewCnt"
              id="review"
              name="sort"
              defaultChecked={sort}
              onChange={onChangeSort}
            />
            <label htmlFor="review">· 리뷰순</label>
            <input
              type="radio"
              className="radio-btn"
              value="themeScore"
              id="score"
              name="sort"
              onChange={onChangeSort}
            />
            <label htmlFor="score">· 별점순</label>

            <input
              type="radio"
              className="radio-btn"
              value="totalLikeCnt"
              id="like"
              name="sort"
              onChange={onChangeSort}
            />
            <label htmlFor="like">· 좋아요순</label>
            <input
              type="radio"
              className="radio-btn"
              value="themeName"
              id="abc"
              name="sort"
              onChange={onChangeSort}
            />
            <label htmlFor="abc">· 가나다순</label>
          </div>
        </div>
        <BodyWrap>
          <PosterWrap>
            {data.data.content.map((theme) => {
              return (
                <div className="theme-wrap" key={`poster${theme.id}`}>
                  <ThemePoster theme={theme} />
                </div>
              );
            })}
          </PosterWrap>

          <div className="pagenation">
            {data.data.totalPages > 1 ? (
              <Pagination
                activePage={themePagenation + 1}
                itemsCountPerPage={9}
                totalItemsCount={data.data.totalElements}
                pageRangeDisplayed={5}
                hideFirstLastPages={true}
                prevPageText={
                  themePagenation === 0 ? (
                    <img src={prevgray} alt="next" />
                  ) : (
                    <img src={prevgreen} alt="next" />
                  )
                }
                nextPageText={
                  themePagenation + 1 === data.data.totalPages ? (
                    <img src={nextgray} alt="next" />
                  ) : (
                    <img src={nextgreen} alt="next" />
                  )
                }
                onChange={onPageHandler}
              />
            ) : null}
          </div>
        </BodyWrap>
      </div>
    </Container>
  );
};
export default ThemeList;

const Container = styled.div`
  height: 100%;
  width: 100%;
  min-height: 100vh;
  display: flex;
  /* flex-direction: column; */
  justify-content: flex-start;
  .filter {
    display: flex;
    justify-content: flex-end;
    position: relative;
  }
  .filter-label {
  }
  .theme-label {
    margin-left: 20px;
    height: 100%;
  }
  .label-sort-wrap {
    display: flex;
    justify-content: space-between;
  }
  .label {
    font-size: 20px;
    font-weight: bold;
    height: 70px;
    display: flex;
    align-items: center;
  }
  .sort-wrap {
    display: flex;
    input {
      display: none;
    }
    input[type="radio"] + label {
      font-size: 20px;
      font-weight: bold;
      display: flex;
      align-items: center;
      margin-right: 15px;
      color: gray;
    }
    input[type="radio"]:checked + label {
      color: black;
    }
  }
`;

const BodyWrap = styled.div`
  width: 1078px;
  height: 100%;
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

const PosterWrap = styled.div`
  height: 1407px;
  width: 100%;
  display: flex;

  flex-wrap: wrap;
`;
