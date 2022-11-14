import styled from "styled-components";
import ThemePoster from "./ThemePoster";
import ThemeFilter from "./ThemeFilter";
import { useState } from "react";

const ThemeList = () => {
  const [isFilter, setIsFilter] = useState(false);
  return (
    <Container>
      <Category onClick={() => setIsFilter(!isFilter)}>
        {isFilter ? "필터 닫기" : "필터 열기"}
      </Category>
      {isFilter ? <ThemeFilter /> : null}
      <ThemePoster />
      <p>테마 맵 돌리기</p>
    </Container>
  );
};
export default ThemeList;

const Container = styled.div`
  height: 100%;
  width: 100%;
`;

const Category = styled.div`
  height: 100%;
  width: 100%;
  cursor: pointer;
`;
