import Slider from "rc-slider";
import "../../styles/index.css";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Category from "./Category";
import CategoryBtn from "./CategoryBtn";

const ThemeFilter = ({
  genre,
  setGenre,
  location,
  setLocation,
  score,
  setScore,
  difficulty,
  setDifficulty,
  people,
  setPeople,
  refetch,
}) => {
  //난이도 선택 슬라이더바 목록
  const levelFilter = {
    1: "매우쉬움",
    2: "쉬움",
    3: "보통",
    4: "어려움",
    5: "매우어려움",
  };

  //별점 선택 슬라이더바 목록
  const starFilter = {
    0: "평가없음",
    1: "1점",
    2: "2점",
    3: "3점",
    4: "4점",
    5: "5점",
  };

  //전체지역 선택 스테이트
  const [isLocationAll, setIsLocationAll] = useState(true);

  //전체장르 선택 스테이트
  const [isGenreAll, setIsGenreAll] = useState(true);

  //전체인원 선택 스테이트
  const [isPeopleAll, setIsPeopleAll] = useState(true);

  //지역 전체 선택시 스테이트값 초기화
  useEffect(() => {
    if (location.length > 0) {
      return setIsLocationAll(false);
    } else if (location.length === 0) {
      return setIsLocationAll(true);
    }
  }, [location]);

  //장르 전체 선택시 스테이트값 초기화
  useEffect(() => {
    if (genre.length > 0) {
      return setIsGenreAll(false);
    } else if (genre.length === 0) {
      return setIsGenreAll(true);
    }
  }, [genre]);

  //인원 전체 선택시 스테이트값 초기화
  useEffect(() => {
    if (people.length > 0) {
      return setIsPeopleAll(false);
    } else if (people.length === 0) {
      return setIsPeopleAll(true);
    }
  }, [people]);

  return (
    <Container>
      <FilterWrap>
        <p>지역별</p>
        <button
          className={isLocationAll ? "ok" : "not"}
          onClick={() => {
            setLocation([]);
          }}
        >
          전체
        </button>
        <CategoryBtn
          categoryIndex={Category.LocationCategory}
          state={location}
          setState={setLocation}
        />

        <p>장르</p>
        <button
          className={isGenreAll ? "ok" : "not"}
          onClick={() => setGenre([])}
        >
          전체
        </button>
        <CategoryBtn
          categoryIndex={Category.GenreCategory}
          state={genre}
          setState={setGenre}
        />
        <p>예약 가능 인원</p>
        <button
          className={isPeopleAll ? "ok" : "not"}
          onClick={() => setPeople([])}
        >
          전체
        </button>
        <CategoryBtn
          categoryIndex={Category.PeopleCategory}
          state={people}
          setState={setPeople}
        />
        <p>평점</p>

        {/* <CategoryBtn
          categoryIndex={Category.ScoreCategory}
          state={score}
          setState={setScore}
        /> */}
        <SliderWrap>
          <Slider
            range
            min={0}
            max={5}
            marks={starFilter}
            step={null}
            defaultValue={[0, 5]}
            allowCross={false}
            pushable
            draggableTrack
            onChange={(e) => setScore(e)}
          />
        </SliderWrap>

        <p>난이도</p>
        {/* <CategoryBtn
          categoryIndex={Category.DifficultyCategory}
          state={difficulty}
          setState={setDifficuldy}
        /> */}
        <SliderWrap>
          <Slider
            range
            min={1}
            max={5}
            marks={levelFilter}
            step={null}
            defaultValue={[1, 5]}
            allowCross={false}
            pushable
            draggableTrack
            onChange={(e) => setDifficulty(e)}
          />
        </SliderWrap>
      </FilterWrap>
      <SearchBtn onClick={() => refetch()}>검색</SearchBtn>
    </Container>
  );
};
export default ThemeFilter;

const Container = styled.div`
  height: 100%;
  width: 300px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  /* align-items: center; */
  background-color: #f0dbdb;
`;

const FilterWrap = styled.div`
  height: 420px;
  width: 100%;
  /* cursor: pointer; */
  border: 1px solid red;
  .not {
    border: 1px solid #e5e5e5;
    border-radius: 4px;
    outline: none;
    cursor: pointer;
    margin: 3px;
    font-size: 12px;

    color: black;
    background-color: #fff;
  }
  .ok {
    border: 1px solid #e5e5e5;
    border-radius: 4px;
    outline: none;
    cursor: pointer;
    margin: 3px;
    font-size: 12px;

    color: white;
    background-color: #428bca;
  }
`;

const SearchBtn = styled.button`
  height: 20px;
  width: 80px;
  background-color: grey;
  color: black;
  border: 1px solid;
  cursor: pointer;

  &:hover {
    background-color: black;
    color: white;
  }
`;

const SliderWrap = styled.div`
  height: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
