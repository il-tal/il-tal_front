import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { korDate } from "../../utils/timeFormater";

const MyReviews = (props) => {
  const navigate = useNavigate();
  return (
    <>
      <ReviewBox
        onClick={() => {
          navigate(`/theme/${props.id}`);
        }}
      >
        <ThemeName>{props.themeName}</ThemeName>
        <ThemeDiv>
          <ThemeRank>{"★".repeat(props.score)}</ThemeRank>
          <ReviewDate>{korDate(props.playTime)}</ReviewDate>
        </ThemeDiv>
        <ThemeComment>{props.comment}</ThemeComment>
      </ReviewBox>
    </>
  );
};

export default MyReviews;

const ReviewBox = styled.div`
  min-width: 400px;
  min-height: 250px;
  max-width: 400px;
  max-height: 250px;
  margin: 20px;
  display: grid;
  grid-template-rows: 4fr 1fr 1fr;
  &:hover {
    background-color: rgba(6, 195, 135, 0.1);
    box-shadow: 0px 4px 15px 1px rgba(6, 195, 135, 0.25);
  }
`;

const ThemeName = styled.div`
  font-size: 32px;
`;

const ThemeDiv = styled.div`
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
  font-size: 15px;
  max-width: 380px;
  text-align: center;
  margin: 10px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;
