import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const PopularTheme = (props) => {
  const navigate = useNavigate();
  return (
    <Container>
      <ThemePic
        img={props.themeImgUrl}
        onClick={() => {
          navigate(`/theme/${props.id}`);
        }}
      >
        <RankWrap>
          <ThemeRank>{props.rank}</ThemeRank>
        </RankWrap>
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
  width: 28rem;
  height: 18rem;
  display: grid;
  grid-template-rows: 3fr 0.5fr;
  background-color: #e1e1e1;
  box-shadow: 0.5rem 0.5rem 0.625rem #ababab;
`;

const RankWrap = styled.div`
  display: grid;
  place-items: start right;
  margin-right: 10px;
  position: relative;
`;

const ThemeRank = styled.div`
  width: 3.25rem;
  height: 3.75rem;
  font-size: 2.5rem;
  z-index: 1;
  display: grid;
  place-content: end center;
  background-color: #ffb743;
  position: relative;
  padding-bottom: 5px;
  bottom: 1rem;
  border-radius: 0rem 0rem 9px 9px;
`;

const ThemeText = styled.div`
  height: 30px;
  max-width: 20rem;
  font-size: ${(props) => props.fontSize}rem;
  font-weight: ${(props) => props.fontWeight};
  text-align: left;
`;
