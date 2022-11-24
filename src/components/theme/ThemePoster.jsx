import styled from "styled-components";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useMutation } from "@tanstack/react-query";
import { wishTheme } from "../../api/ThemeApi";

const ThemePoster = ({ theme }) => {
  const navigate = useNavigate();
  const [isLike, setIsLike] = useState(false);
  const themeLike = useMutation((themeId) => wishTheme(themeId));
  return (
    <Container>
      <ThemePic onClick={() => navigate(`/theme/${theme.id}`)}>
        <img src={theme.themeImgUrl} alt="themePoster" />
      </ThemePic>
      <ThemeTextWrap>
        <ThemeTextHeader>
          <span>{theme.companyName}</span>
          <span>{theme.genre}</span>
        </ThemeTextHeader>
        <ThemeTextTitle onClick={() => navigate(`/theme/${theme.id}`)}>
          {theme.themeName}
        </ThemeTextTitle>
        <ThemeTextScore>
          ⭐ {theme.themeScore} ({theme.reviewCnt})
        </ThemeTextScore>
        <ThemeTextLike>
          <div onClick={() => themeLike.mutate({ themeId: theme.id })}>
            {isLike ? <AiOutlineHeart /> : <AiFillHeart color={"red"} />}
          </div>
        </ThemeTextLike>
      </ThemeTextWrap>
    </Container>
  );
};

export default ThemePoster;

const Container = styled.div`
  height: 330px;
  width: 200px;
  border: 1px solid;
  display: flex;
  flex-direction: column;
  align-items: center;
  box-shadow: 5px 5px 5px 5px gray;
  margin: 30px;
`;

const ThemePic = styled.div`
  height: 200px;
  width: 200px;

  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  cursor: pointer;
  img {
    display: flex;
    object-fit: cover;
    width: 100%;
    height: 100%;
  }
`;

const ThemeTextWrap = styled.div`
  width: 190px;
  height: 130px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const ThemeTextHeader = styled.div`
  width: 190px;
  height: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 5px;

  color: grey;
  font-size: 13px;
  span {
  }
`;
const ThemeTextTitle = styled.div`
  width: 190px;
  height: 60px;
  font-size: 23px;
  font-weight: bold;
  margin: 5px 0;
  display: flex;
  cursor: pointer;
`;
const ThemeTextScore = styled.div`
  width: 190px;
  height: 25px;
  font-size: 15px;

  display: flex;
`;
const ThemeTextLike = styled.div`
  width: 190px;
  height: 25px;

  font-size: 25px;
  div {
    height: 25px;
    width: 25px;
    float: right;
    cursor: pointer;
  }
`;
