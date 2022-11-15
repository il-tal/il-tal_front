import styled from "styled-components";
import ThemePoster from "./ThemePoster";
import ThemeFilter from "./ThemeFilter";
import { useState } from "react";
import { useInfiniteQuery, useQuery } from "@tanstack/react-query";
import { getFilterTheme, getThemes } from "../../api/ThemeApi";
import InfiniteScroll from "react-infinite-scroller";

const ThemeList = () => {
  //필터 토글
  const [isFilter, setIsFilter] = useState(false);

  //카테고리 필터 스테이트
  const [genre, setGenre] = useState(["전체"]);
  const [location, setLocation] = useState(["전체"]);
  const [score, setScore] = useState(["전체"]);
  const [difficulty, setDifficuldy] = useState(["전체"]);
  const [people, setPeople] = useState(["전체"]);

  const {
    data,
    fetchNextPage,
    hasNextPage,
    isLoading,
    isFetching,
    isError,
    error,
  } = useInfiniteQuery(
    ["getThemeList"],
    ({ pageParam = 0 }) =>
      getFilterTheme(pageParam, genre, location, score, people, difficulty),
    {
      getNextPageParam: (lastpage) => lastpage.next || undefined,
    }
  );
  // if (isLoading) return <div>Loading...</div>;
  // if (isError) return <div>Error! {error.toString()}</div>;

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
          setDifficuldy={setDifficuldy}
          people={people}
          setPeople={setPeople}
        />
      ) : null}
      {/* {isFetching && <div>Loading...</div>}
      <InfiniteScroll loadMore={fetchNextPage} hasMore={hasNextPage}>
        {data.pages.map((pagedata) => {
          return pagedata.results.map((theme) => {
            return <ThemePoster theme={theme} />;
          });
        })}
      </InfiniteScroll> */}
      <PosterWrap>
        <ThemePoster />
        <ThemePoster />
        <ThemePoster />
        <ThemePoster />
        <ThemePoster />
        <ThemePoster />
        <ThemePoster />
        <ThemePoster />
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
  width: 800px;
  display: flex;
  margin: 0 auto;
  /* justify-content: center; */
  flex-wrap: wrap;
`;
