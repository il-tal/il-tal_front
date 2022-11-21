import styled from "styled-components";

//메인페이지 레이아웃에 보면 ThemePic과 ThemeText가 겹쳐있음
//아마 z index사용해서 겹쳐 올려야 하는듯..? 잘모르겠음

const RecommandTheme = (props) => {
  return (
    <Container>
      <ThemePic>사진</ThemePic>

      <ThemeText fontSize={16} fontWeight={100}>
        비트포비아 미션브레이크 CGV 용산점
      </ThemeText>
      <ThemeText fontSize={24} fontWeight={700}>
        도시괴담 Part.2 ‘The Abandoned Office’
      </ThemeText>
    </Container>
  );
};
export default RecommandTheme;

const Container = styled.div`
  height: 100%;
  margin: 25px;
  display: flex;
  flex-direction: column;
`;
const ThemePic = styled.div`
  height: 200px;
  width: 280px;
  background-color: teal;
`;

const ThemeText = styled.div`
  height: 50px;
  width: 280px;
  font-size: ${(props) => props.fontSize}px;
  font-weight: ${(props) => props.fontWeight};
  display: flex;
  align-items: center;
  text-align: left;
  background-color: tomato;
`;
