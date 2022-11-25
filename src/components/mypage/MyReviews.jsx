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
          <ThemeRank>{"⭐".repeat(props.score)}</ThemeRank>
          <ReviewDate>{korDate(props.playTime)}</ReviewDate>
        </ThemeDiv>
        <ThemeComment>{props.comment}</ThemeComment>
      </ReviewBox>
    </>
  );
};

export default MyReviews;

const ReviewBox = styled.div`
  min-width: 25rem;
  min-height: 15rem;
  background-color: #d9d9d9;
  box-shadow: 0.1rem 0.1rem 3rem rgb(0, 0, 0, 0.15);
  margin: 20px;
  display: grid;
  grid-template-rows: 3fr 1fr 1fr;
`;

const ThemeName = styled.div`
  font-size: 2.5rem;
`;

const ThemeDiv = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-content: space-between;
`;

const ThemeRank = styled.div``;

const ReviewDate = styled.div``;

const ThemeComment = styled.div``;
