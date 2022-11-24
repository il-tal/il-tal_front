import styled from "styled-components";
import { Link } from "react-router-dom";

const ThemePoster = ({ theme }) => {
  return (
    <Container>
      <ThemePic>
        <Link to={"/theme/:id"}>
          <img src={theme.themeImgUrl} />
        </Link>
      </ThemePic>
      <ThemeTextBox>
        <ThemeText>{theme.themeName}</ThemeText>
        <ThemeScore>⭐️ {theme.themeScore}</ThemeScore>
        <ThemeLike> ❤️ </ThemeLike>
      </ThemeTextBox>
    </Container>
  );
};

export default ThemePoster;

const Container = styled.div`
  height: 294px;
  width: 225px;
  margin-right: 55px;
  border: 1px solid gray;
`;

const ThemePic = styled.div`
  img {
    height: 190px;
    width: 225px;
    object-fit: cover;
  }
`;
const ThemeTextBox = styled.div`
  position: relative;
  height: 100px;
  width: 100%;
  background-color: white;
  display: flex;
  flex-direction: column;
`;

const ThemeText = styled.text`
  margin: 10px;
  font-size: 19px;
`;

const ThemeScore = styled.text`
  margin-left: 10px;
`;

const ThemeLike = styled.div`
  position: absolute;
  margin: 10px;
  right: 10px;
  bottom: 10px;
`;
