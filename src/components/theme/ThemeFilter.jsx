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
}) => {
  const peopleFilter = {
    1: "1인",
    2: "2인",
    3: "3인",
    4: "4인",
    5: "5인",
  };
  const levelFilter = {
    1: "매우쉬움",
    2: "쉬움",
    3: "보통",
    4: "어려움",
    5: "매우어려움",
  };
  const starFilter = {
    1: "1점",
    2: "2점",
    3: "3점",
    4: "4점",
    5: "5점",
  };

  return (
    <Container>
      <FilterWrap>
        <p>지역별</p>

        <CategoryBtn
          categoryIndex={Category.LocationCategory}
          state={location}
          setState={setLocation}
        />

        <p>장르</p>
        <CategoryBtn
          categoryIndex={Category.GenreCategory}
          state={genre}
          setState={setGenre}
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
            min={1}
            max={5}
            marks={starFilter}
            step={null}
            defaultValue={[1, 5]}
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

        <p>예약 가능 인원</p>
        {/* <CategoryBtn
          categoryIndex={Category.PeopleCategory}
          state={people}
          setState={setPeople}
        /> */}
        <SliderWrap>
          <Slider
            range
            min={1}
            max={5}
            marks={peopleFilter}
            step={null}
            defaultValue={[1, 5]}
            allowCross={false}
            pushable
            draggableTrack
            onChange={(e) => setPeople(e)}
          />
        </SliderWrap>
      </FilterWrap>
      <SearchBtn>검색</SearchBtn>
    </Container>
  );
};
export default ThemeFilter;

const Container = styled.div`
  height: 800px;
  width: 300px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  /* align-items: center; */
  background-color: #f0dbdb;
`;

const FilterWrap = styled.div`
  height: 100%;
  width: 100%;
  /* cursor: pointer; */
  border: 1px solid red;
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
