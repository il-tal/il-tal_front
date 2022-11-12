import { useState } from "react";
import styled from "styled-components";
import Category from "./Category";
import CategoryBtn from "./CategoryBtn";

const ThemeFilter = () => {
  const [genre, setGenre] = useState(["전체"]);
  const [location, setLocation] = useState(["전체"]);
  const [score, setScore] = useState(["전체"]);
  const [difficulty, setDifficuldy] = useState(["전체"]);
  const [people, setPeople] = useState(["전체"]);

  console.log(
    "장르:",
    genre,
    "장소:",
    location,
    "별점:",
    score,
    "난이도:",
    difficulty,
    "인원:",
    people
  );
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
    </Container>
  );
};
export default ThemeFilter;

const Container = styled.div`
  height: 370px;
  width: 100%;
  display: flex;
  justify-content: center;
  /* align-items: center; */
  background-color: #eee6c4;
`;

const FilterWrap = styled.div`
  height: 100%;
  width: 90%;
  /* cursor: pointer; */
  border: 1px solid red;
`;

const Location = styled.div``;

const Genre = styled.div``;

const Grade = styled.div`
  word-spacing: 8px;
`;

const Difficulty = styled.div``;

const RecommendPeoPle = styled.div``;
