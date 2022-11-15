import { useState } from "react";
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
  setDifficuldy,
  people,
  setPeople,
}) => {
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

        <CategoryBtn
          categoryIndex={Category.ScoreCategory}
          state={score}
          setState={setScore}
        />

        <p>난이도</p>
        <CategoryBtn
          categoryIndex={Category.DifficultyCategory}
          state={difficulty}
          setState={setDifficuldy}
        />

        <p>예약 가능 인원</p>
        <CategoryBtn
          categoryIndex={Category.PeopleCategory}
          state={people}
          setState={setPeople}
        />
      </FilterWrap>
      <SearchBtn>검색</SearchBtn>
    </Container>
  );
};
export default ThemeFilter;

const Container = styled.div`
  height: 400px;
  width: 300px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  /* align-items: center; */
  background-color: #eee6c4;
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
