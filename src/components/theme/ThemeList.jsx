import styled from "styled-components";
import ThemePoster from "./ThemePoster";
import ThemeFilter from "./ThemeFilter";

const ThemeList = () => {
  return (
    <Container>
      <Category>카테고리</Category>
      <ThemeFilter />
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
`;
