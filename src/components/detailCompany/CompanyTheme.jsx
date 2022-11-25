import styled from "styled-components";
const CompanyTheme = ({ theme }) => {
  return (
    <Container>
      <ThemePic>
        <img src={theme.themeImgUrl} />
      </ThemePic>
      <ThemeInfo>
        <ThemeText>
          <div className="body-wrap">
            <span className="genre">{theme.genre}</span>
            <span className="title">{theme.themeName}</span>
            <span className="review">⭐ {theme.themeScore}</span>
            <span>{theme.price}원</span>
          </div>
          <div className="info-like-wrap">
            <span>
              난이도{"⭐".repeat(theme.difficulty)} | {theme.minPeople}~
              {theme.maxPeople}명 | {theme.playTime}분
            </span>

            <button>❤ 좋아요 {theme.totalLikeCnt}</button>
          </div>
        </ThemeText>
      </ThemeInfo>
    </Container>
  );
};

export default CompanyTheme;

const Container = styled.div`
  height: 200px;
  width: 100%;
  display: flex;
  margin: 30px 0;
  box-shadow: 5px 5px 5px 5px gray;
  cursor: pointer;
  transform: scale(1);
  &hover {
    transform: scale(1.5);
  }
`;
const ThemePic = styled.div`
  height: 200px;
  width: 350px;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;
const ThemeInfo = styled.div`
  height: 100%;
  width: 100%;
`;
const ThemeText = styled.div`
  height: 200px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  box-sizing: border-box;
  padding: 15px;
  .body-wrap {
    display: flex;
    flex-direction: column;
    span {
      margin-bottom: 10px;
    }
    .genre {
      font-size: 18px;
    }
    .title {
      font-size: 25px;
    }
    .review {
      font-size: 18px;
    }
  }
  .info-like-wrap {
    display: flex;
    justify-content: space-between;
    align-items: center;
    span {
      font-size: 18px;
    }
    button {
      height: 35px;
      width: 150px;
      font-size: 18px;
    }
  }
`;
