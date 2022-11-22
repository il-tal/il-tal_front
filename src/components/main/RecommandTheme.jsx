import styled from "styled-components";

//메인페이지 레이아웃에 보면 ThemePic과 ThemeText가 겹쳐있음
//아마 z index사용해서 겹쳐 올려야 하는듯..? 잘모르겠음

const RecommandTheme = (props) => {
  return (
    <Container>
      <ThemePic img={props.themeImgUrl}></ThemePic>
      <ThemeText fontSize={1} fontWeight={100}>
        {props.companyName}
      </ThemeText>
      <ThemeText fontSize={1.25} fontWeight={700}>
        {props.themeName}
      </ThemeText>
    </Container>
  );
};
export default RecommandTheme;

const Container = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
`;
const ThemePic = styled.div`
  background-image: url(${(props) => props.img});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  height: 100%;
  width: 22.5rem;
  display: table-cell;
  background-color: #e1e1e1;
`;

const ThemeText = styled.div`
  width: 22.5rem;
  font-size: ${(props) => props.fontSize}rem;
  font-weight: ${(props) => props.fontWeight};
  display: flex;
  align-items: center;
  text-align: left;
  background-color: #ffb743;
`;
