import styled from "styled-components";

//ThemePic에는 프롭스로 받은 테마의 사진
//ThemeText에는 프롭스로 받은 테마의 제목과 평점 받기

const ThemePoster = () => {
  return (
    <Container>
      <ThemePic />
      <ThemeText>테마명+별점</ThemeText>
    </Container>
  );
};

export default ThemePoster;

const Container = styled.div`
  height: 100%;
  width: 100%;
`;

const ThemePic = styled.div`
  height: 100px;
  width: 100px;
  background-color: orange;
`;
const ThemeText = styled.div`
  height: 100px;
  width: 200px;
`;
