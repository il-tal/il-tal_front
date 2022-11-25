import styled from "styled-components";
import ThemePoster from "./ThemePoster";
import ThemeFilter from "./ThemeFilter";
import { useState } from "react";
import { useInfiniteQuery } from "@tanstack/react-query";
import { getFilterTheme } from "../../api/ThemeApi";
import InfiniteScroll from "react-infinite-scroller";
import { useRecoilValue } from "recoil";
import {
  difficultyState,
  genreState,
  locationState,
  peopleState,
  scoreState,
} from "../../api/store";

const ThemeList = () => {
  //필터 토글
  const [isFilter, setIsFilter] = useState(false);

  //전역변수로 선언된 각 필터 스테이트를 값만 불러서 사용 (useRecoilValue사용)
  const genre = useRecoilValue(genreState);
  const location = useRecoilValue(locationState);
  const people = useRecoilValue(peopleState);
  const score = useRecoilValue(scoreState);
  const difficulty = useRecoilValue(difficultyState);

  //필터링 된 장르들 무한쿼리
  const {
    data,
    fetchNextPage,
    hasNextPage,
    isLoading,
    isFetching,
    isError,
    error,

    refetch,
  } = useInfiniteQuery(
    ["getThemeList"],
    ({ pageParam = 0 }) =>
      getFilterTheme({
        pageParam,
        genre,
        location,
        score,
        people,
        difficulty,
        refetch,
      }),
    {
      getNextPageParam: (lastPage, allPages) => {
        //현재 페이지의 데이터가 5개이면 다음페이지를 가져오고
        //5보다 작으면 undefined로 다음페이지가 없다고 명령함
        //getNextPageParam의 첫번째 인자는 현재페이지 정보, 두번째 인자는 불러온 모든 페이지 정보
        if (lastPage.data.length === 5) {
          return allPages.length;
        } else if (lastPage.data.length < 5) {
          return undefined;
        }
      },
    }
  );

  //로딩 및 에러 처리
  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error! {error.toString()}</div>;

  return (
    <Container>
      {/* <div className="filter">
        <Filter onClick={() => setIsFilter(!isFilter)}>
          {isFilter ? "필터 닫기" : "필터 열기"}
        </Filter>
        {isFilter ? <ThemeFilter refetch={refetch} /> : null}
      </div> */}
      <ThemeFilter refetch={refetch} />
      <PosterWrap>
        <InfiniteScroll
          className="infinite"
          loadMore={fetchNextPage}
          hasMore={hasNextPage}
        >
          {data.pages.map((pagedata) => {
            return pagedata.data.map((theme) => {
              return (
                <div>
                  <ThemePoster
                    theme={theme}
                    data={data}
                    onClick={() => alert("hi")}
                  />
                </div>
              );
            });
          })}
        </InfiniteScroll>
        <div>
          {isFetching
            ? "loading..."
            : hasNextPage
            ? "더보기"
            : "더이상 테마가 없어요!"}
        </div>
      </PosterWrap>
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

const Filter = styled.div`
  height: 30px;
  width: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid;
  background-color: grey;
  margin: 10px;
  cursor: pointer;
  &:hover {
    background-color: black;
    color: white;
  }
`;

const PosterWrap = styled.div`
  height: 100%;
  width: 1100px;
  display: flex;
  margin: 0 auto;
  justify-content: center;
  flex-wrap: wrap;
  .infinite {
    display: flex;
    flex-wrap: wrap;
  }
`;
