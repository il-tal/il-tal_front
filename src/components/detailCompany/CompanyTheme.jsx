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
            <span className="price">{theme.price}원</span>
          </div>
          <div className="info-like-wrap">
            <span>
              난이도{"⭐".repeat(theme.difficulty)} | {theme.minPeople}~
              {theme.maxPeople}명 | {theme.playTime}분
            </span>

            <button className="like-btn">❤ 좋아요 {theme.totalLikeCnt}</button>
          </div>
        </ThemeText>
      </ThemeInfo>
    </Container>
  );
};

export default CompanyTheme;

const Container = styled.div`
  height: 280px;
  width: 1440px;
  display: flex;
  margin: 20px 0;
  border-radius: 8px;
  border: 1px solid gray;
  overflow: hidden;
  cursor: pointer;
  &:hover {
    border: 1px solid rgba(255, 183, 67, 1);
  }
`;
const ThemePic = styled.div`
  height: 280px;
  width: 440px;
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
  height: 280px;
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
      font-size: 24px;
    }
    .title {
      font-size: 32px;
      font-weight: bold;
    }
    .review {
      font-size: 24px;
    }
    .price {
      font-size: 24px;
    }
  }
  .info-like-wrap {
    display: flex;
    justify-content: space-between;
    align-items: center;
    span {
      font-size: 18px;
    }
    .like-btn {
      height: 48px;
      width: 220px;
      font-size: 18px;
      border-radius: 8px;
      background-color: white;
      border: 1px solid gray;
    }
  }
`;
