import styled from "styled-components";

const PopularTheme = (props) => {
  return (
    <Container>
      <ThemePic img={props.themeImgUrl}>
        <ThemeRank>{props.rank}</ThemeRank>
        <ThemeText fontSize={1} fontWeight={100}>
          {props.companyName}
        </ThemeText>
        <ThemeText fontSize={1.5} fontWeight={700}>
          {props.themeName}
        </ThemeText>
      </ThemePic>
    </Container>
  );
};
export default PopularTheme;

const Container = styled.div`
  height: 100%;
  width: 100%;
  margin: 25px;
  display: table;
  flex-direction: column;
`;

const ThemePic = styled.div`
  background-image: url(${(props) => props.img});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  height: 15rem;
  width: 22.5rem;
  display: grid;
  grid-template-rows: 1.5fr 0fr 0.5fr;
  background-color: #e1e1e1;
`;

const ThemeRank = styled.div`
  width: 2.5rem;
  height: 2.5rem;
  font-size: 2.5rem;
  z-index: 1;
  display: flex;
  flex-direction: column;
  background-color: #ffb743;
`;

const ThemeText = styled.div`
  height: 30px;
  width: 20rem;
  font-size: ${(props) => props.fontSize}rem;
  font-weight: ${(props) => props.fontWeight};
  text-align: left;
`;
