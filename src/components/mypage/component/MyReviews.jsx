import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { korDate } from "../../../utils/timeFormater";

const MyReviews = (props) => {
  const navigate = useNavigate();
  return (
    <ReviewBox
      color={props.color}
      background={props.background}
      onClick={() => {
        navigate(`/theme/${props.id}`);
      }}
    >
      <ThemeImg src={props.themeImgUrl} alt={props.themeName}>
        <source srcSet={props.themeImgUrl} type="image/webp" />
        <img src={props.themeImgUrl} alt={props.themeName} />
      </ThemeImg>
      <ThemeName>{props.themeName}</ThemeName>
      <ThemeDiv>
        <ThemeRank>{"★".repeat(props.score)}</ThemeRank>
        <ReviewDate>{korDate(props.playTime)}</ReviewDate>
      </ThemeDiv>
      <ThemeComment>{props.comment}</ThemeComment>
    </ReviewBox>
  );
};

export default MyReviews;

const ReviewBox = styled.div`
  min-width: 400px;
  min-height: 250px;
  max-width: 400px;
  max-height: 250px;
  border-radius: 8px;
  margin: 20px;
  display: grid;
  position: relative;
  color: ${(props) => props.color || "#ffffff"};
  background-color: ${(props) => props.background || "transparent"};
  grid-template-rows: 4fr 1fr 1fr;
  &:hover {
    background-color: rgba(6, 195, 135, 0.1);
    box-shadow: 0px 4px 15px 1px rgba(6, 195, 135, 0.25);
  }
`;

const ThemeImg = styled.picture`
  min-width: 400px;
  min-height: 250px;
  max-width: 400px;
  max-height: 250px;
  filter: brightness(50%);
  border-radius: 8px;
  position: absolute;

  img {
    min-width: 400px;
    min-height: 250px;
    max-width: 400px;
    max-height: 250px;
    filter: brightness(50%);
    border-radius: 8px;
  }
`;

const ThemeName = styled.div`
  z-index: 1;
  font-size: 32px;
`;

const ThemeDiv = styled.div`
  z-index: 1;
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-content: space-between;
  align-items: center;
`;

const ThemeRank = styled.div`
  font-size: 24px;
  color: #06c387;
`;

const ReviewDate = styled.div`
  font-size: 15px;
`;

const ThemeComment = styled.div`
  z-index: 1;
  font-size: 15px;
  max-width: 380px;
  text-align: center;
  margin: 10px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;
