import styled from "styled-components";

//메인페이지 레이아웃에 보면 ThemePic과 ThemeText가 겹쳐있음
//아마 z index사용해서 겹쳐 올려야 하는듯..? 잘모르겠음

const PopularTheme = () => {
  return (
    <Container>
      <ThemePic>사진</ThemePic>
      <ThemeText>타이틀</ThemeText>
    </Container>
  );
};
export default PopularTheme;

const Container = styled.div`
  height: 100%;
  width: 100%;
  margin: 10px;
`;
const ThemePic = styled.div`
  height: 150px;
  width: 200px;
  background-color: teal;
`;
const ThemeText = styled.div`
  height: 50px;
  width: 200px;
  background-color: tomato;
`;
