import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const PopularTheme = (props) => {
  const navigate = useNavigate();
  return (
    <Container>
      <ThemeWrap>
        <RankWrap>
          <ThemeRank>{props.rank}</ThemeRank>
        </RankWrap>
        <ThemeImg
          src={props.themeImgUrl}
          alt={`${props.themeName}`}
          onClick={() => {
            navigate(`/theme/${props.id}`);
          }}
        >
          <source srcSet={props.themeImgUrl} type="image/webp" />
          <img
            src={props.themeImgUrl}
            alt={`${props.themeName}`}
            className="pop-img"
          />
        </ThemeImg>

        <ThemeText fontSize={`20px`} fontWeight={400}>
          {props.companyName}
        </ThemeText>
        <ThemeText fontSize={`32px`} fontWeight={700}>
          {props.themeName}
        </ThemeText>
      </ThemeWrap>
    </Container>
  );
};
export default PopularTheme;

const Container = styled.div`
  height: 358px;
  width: 224px;
  max-width: 358px;
  max-height: 280px;
  margin: 25px;
  display: table;
  flex-direction: column;
`;

const ThemeWrap = styled.div`
  width: 358px;
  height: 280px;
  display: grid;
  grid-template-rows: 5fr 1fr 1fr;
`;

const ThemeImg = styled.picture`
  filter: brightness(50%);
  min-width: 358px;
  min-height: 280px;
  max-height: 280px;
  max-width: 358px;
  border-radius: 8px;
  object-fit: cover;
  position: absolute;
  margin: 0 auto;
  .pop-img {
    filter: brightness(50%);
    min-width: 358px;
    min-height: 280px;
    max-height: 280px;
    max-width: 358px;
    border-radius: 8px;
  }
`;

const RankWrap = styled.div`
  display: grid;
  place-content: right center;
  width: 100%;
  height: 100%;
  margin-left: 85%;
  color: #ffffff;
  position: relative;
`;

const ThemeRank = styled.div`
  width: 42px;
  height: 48px;
  font-size: 32px;
  z-index: 1;
  display: grid;
  place-content: end center;
  position: absolute;
  top: -20px;
  background-color: #06c387;
  padding-bottom: 9px;
  bottom: 1rem;
  border-radius: 0px 0px 6.44618px 6.44618px;
`;

const ThemeText = styled.div`
  z-index: 1;
  max-width: 425px;
  min-height: 30px;
  color: #ffffff;
  font-size: ${(props) => props.fontSize};
  font-weight: ${(props) => props.fontWeight};
  text-align: left;
  margin-left: 15px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;
