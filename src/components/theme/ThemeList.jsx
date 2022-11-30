import styled from "styled-components";
import ThemePoster from "./ThemePoster";
import ThemeFilter from "./ThemeFilter";
import { useQuery } from "@tanstack/react-query";
import { getFilterTheme } from "../../api/ThemeApi";
import { useRecoilState, useRecoilValue } from "recoil";
import {
  difficultyState,
  genreState,
  locationState,
  peopleState,
  scoreState,
  themePages,
} from "../../api/store";

import Pagination from "react-js-pagination";

const ThemeList = () => {
  //페이지 전역상태
  const [themePagenation, setThemePage] = useRecoilState(themePages);

  //전역변수로 선언된 각 필터 스테이트를 값만 불러서 사용 (useRecoilValue사용)
  const genre = useRecoilValue(genreState);
  const location = useRecoilValue(locationState);
  const people = useRecoilValue(peopleState);
  const score = useRecoilValue(scoreState);
  const difficulty = useRecoilValue(difficultyState);

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
      })
  );

  //페이지네이션이 눌릴때마다 themePage를 페이지에 맞게 설정
  const onPageHandler = (page) => {
    setThemePage(page - 1);
  };

  // 로딩 및 에러 처리
  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error! {error.toString()}</div>;
  console.log(data.size.totalSize);
  return (
    <Container>
      <ThemeFilter refetch={refetch} />
      <BodyWrap>
        <PosterWrap>
          {data.data.map((theme) => {
            return (
              <div className="theme-wrap" key={theme.id}>
                <ThemePoster theme={theme} />
              </div>
            );
          })}
        </PosterWrap>
        <div className="pagenation">
          <Pagination
            activePage={themePagenation + 1}
            itemsCountPerPage={9}
            totalItemsCount={data.size.totalSize}
            pageRangeDisplayed={5}
            prevPageText={"<"}
            nextPageText={">"}
            onChange={onPageHandler}
          />
        </div>
      </BodyWrap>
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
`;

const BodyWrap = styled.div`
  height: 100%;
  .pagenation {
    .pagination {
      display: flex;
      justify-content: center;
      margin-top: 15px;
    }

    ul {
      list-style: none;
      padding: 0;
    }

    ul.pagination li {
      display: inline-block;
      width: 30px;
      height: 30px;
      border: 1px solid #e2e2e2;
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
      color: #337ab7;
      font-size: 1rem;
    }

    ul.pagination li.active a {
      color: white;
    }

    ul.pagination li.active {
      background-color: #337ab7;
    }

    ul.pagination li a:hover,
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
  height: 100%;
  width: 1100px;
  display: flex;
  margin: 0 auto;
  justify-content: center;
  flex-wrap: wrap;
`;
