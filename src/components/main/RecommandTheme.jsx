import styled from "styled-components";

const RecommandTheme = () => {
  return (
    <Container>
      <ThemePic>사진</ThemePic>
      <ThemeText>텍스트</ThemeText>
    </Container>
  );
};
export default RecommandTheme;

const Container = styled.div`
  height: 100%;
  width: 100%;
  margin: 10px;
`;

const ThemePic = styled.div`
  height: 100px;
  width: 150px;
  background-color: orange;
`;

const ThemeText = styled.div`
  height: 30px;
  width: 150px;
  background-color: teal;
`;
