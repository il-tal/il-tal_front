import styled from "styled-components";

const CompanyTheme = () => {
  return (
    <Container>
      <ThemePic>포스터</ThemePic>
      <ThemeInfo>
        <ThemeText>title</ThemeText>
        <ThemeText>company</ThemeText>
        <ThemeText>star&replyCnt</ThemeText>
        <ThemeText>like</ThemeText>
      </ThemeInfo>
    </Container>
  );
};

export default CompanyTheme;

const Container = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
`;
const ThemePic = styled.div`
  height: 100px;
  width: 100px;
  background-color: teal;
`;
const ThemeInfo = styled.div`
  height: 100%;
  width: 100%;
  background-color: orange;
`;
const ThemeText = styled.p`
  font-size: 15px;
`;
