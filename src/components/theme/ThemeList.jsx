import styled from "styled-components";
import ThemePoster from "./ThemePoster";
import ThemeFilter from "./ThemeFilter";
import { useState } from "react";
import { useInfiniteQuery, useQuery } from "@tanstack/react-query";
import { getFilterTheme, getThemes } from "../../api/ThemeApi";
import InfiniteScroll from "react-infinite-scroller";
import { useNavigate } from "react-router-dom";
import { atom, useRecoilState } from "recoil";

const ThemeList = () => {
  const navigate = useNavigate();
  //필터 토글
  const [isFilter, setIsFilter] = useState(false);

  // const genreState = atom({
  //   key: "genreState1",
  //   default: [],
  // });
  // const [genreInput, setGenreInput] = useRecoilState(genreState);

  //카테고리 필터 스테이트들
  const [genre, setGenre] = useState([]);
  const [location, setLocation] = useState([]);
  const [score, setScore] = useState([0, 5]);
  const [difficulty, setDifficulty] = useState([1, 5]);
  const [people, setPeople] = useState([]);

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
      <Filter onClick={() => setIsFilter(!isFilter)}>
        {isFilter ? "필터 닫기" : "필터 열기"}
      </Filter>
      {isFilter ? (
        <ThemeFilter
          genre={genre}
          setGenre={setGenre}
          location={location}
          setLocation={setLocation}
          score={score}
          setScore={setScore}
          difficulty={difficulty}
          setDifficulty={setDifficulty}
          people={people}
          setPeople={setPeople}
          refetch={refetch}
        />
      ) : null}

      <PosterWrap>
        {isFetching && <div>Loading...</div>}
        <InfiniteScroll
          className="infinite"
          loadMore={fetchNextPage}
          hasMore={hasNextPage}
        >
          {data.pages.map((pagedata) => {
            return pagedata.data.map((theme) => {
              return (
                <div>
                  <ThemePoster theme={theme} onClick={() => alert("hi")} />
                </div>
              );
            });
          })}
        </InfiniteScroll>

        {/* <ThemePoster />
        <ThemePoster />
        <ThemePoster />
        <ThemePoster />
        <ThemePoster />
        <ThemePoster />
        <ThemePoster />
        <ThemePoster /> */}
      </PosterWrap>
    </Container>
  );
};
export default ThemeList;

const Container = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
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
