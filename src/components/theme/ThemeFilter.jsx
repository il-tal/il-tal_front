import Slider from "rc-slider";
import "../../styles/index.css";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Category from "./Category";
import CategoryBtn from "./CategoryBtn";
import { useRecoilState, useSetRecoilState } from "recoil";
import {
  difficultyState,
  genreState,
  locationState,
  peopleState,
  scoreState,
  themePages,
} from "../../api/store";
import { useQueryClient } from "@tanstack/react-query";
const ThemeFilter = ({ refetch }) => {
  //전역변수로 선언된 각 필터별 스테이트 (Recoil)
  const [genre, setGenre] = useRecoilState(genreState);
  const [location, setLocation] = useRecoilState(locationState);
  const [people, setPeople] = useRecoilState(peopleState);
  const [score, setScore] = useRecoilState(scoreState);
  const [difficulty, setDifficulty] = useRecoilState(difficultyState);

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

  const resetCategory = () => {
    setGenre([]);
    setLocation([]);
    setPeople([]);
    setScore([0, 5]);
    setDifficulty([1, 5]);
  };

  const setPage = useSetRecoilState(themePages);

  return (
    <Container>
      <FilterWrap>
        <div className="category">
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
        </div>

        <div className="category">
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
        </div>
        <div className="category">
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
        </div>
        <div className="category">
          <p>평점</p>
          <div className="state-text">
            {score[0] === 0 ? "평가 없음" : "⭐".repeat(score[0])} -
            {"⭐".repeat(score[1])}
          </div>

          <SliderWrap>
            <Slider
              range
              min={0}
              max={5}
              // marks={starFilter}
              step={1}
              defaultValue={[0, 5]}
              allowCross={false}
              pushable
              draggableTrack
              value={score}
              onChange={(e) => setScore(e)}
            />
          </SliderWrap>
        </div>

        <div className="category">
          <p>난이도</p>
          <div className="state-text">
            {"😨".repeat(difficulty[0])} - {"😨".repeat(difficulty[1])}
          </div>
          <SliderWrap>
            <Slider
              range
              min={1}
              max={5}
              // marks={levelFilter}
              step={1}
              defaultValue={[1, 5]}
              value={difficulty}
              allowCross={false}
              pushable
              draggableTrack
              onChange={(e) => setDifficulty(e)}
            />
          </SliderWrap>
        </div>
      </FilterWrap>
      <div className="button-wrap">
        <SearchBtn2 onClick={() => resetCategory()}>초기화</SearchBtn2>
        <SearchBtn
          onClick={() => {
            refetch();
            setPage(0);
          }}
        >
          적용
        </SearchBtn>
      </div>
    </Container>
  );
};
export default ThemeFilter;

const Container = styled.div`
  height: 100%;
  width: 340px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  margin-top: 27px;
  border: 1px solid gray;
  border-radius: 8px;
`;

const FilterWrap = styled.div`
  height: 100%;
  width: 100%;
  box-sizing: border-box;
  padding: 15px;

  p {
    font-size: 16;
    font-weight: bold;
  }
  .not {
    width: 70px;
    height: 35px;
    padding: 0 10px;
    border-radius: 8px;
    border: 1px solid #e5e5e5;
    border-radius: 4px;
    outline: none;
    cursor: pointer;
    margin: 3px;
    font-size: 16px;

    color: black;
    background-color: #fff;
  }
  .ok {
    width: 70px;
    height: 35px;
    padding: 0 10px;
    border-radius: 8px;
    border: 1px solid #e5e5e5;
    border-radius: 8px;
    outline: none;
    cursor: pointer;
    margin: 3px;
    font-size: 16px;

    color: white;
    background-color: rgba(255, 183, 67, 1);
  }
  .category {
    margin: 20px 0;
    p {
      margin-bottom: 10px;
    }
    .state-text {
      margin-top: 20px;
    }
  }
`;

const SearchBtn = styled.button`
  height: 48px;
  width: 132px;
  background-color: rgba(255, 183, 67, 1);
  color: white;
  border: none;
  cursor: pointer;
  border-radius: 8px;
  font-size: 16px;
  margin: 10px;

  &:hover {
    background-color: black;
    color: white;
  }
`;
const SearchBtn2 = styled.button`
  height: 48px;
  width: 132px;
  background-color: white;
  color: black;
  border: 1px solid gray;
  cursor: pointer;
  border-radius: 8px;
  font-size: 16px;
  margin: 10px;

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
