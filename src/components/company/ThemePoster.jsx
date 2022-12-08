import styled from "styled-components";
import { Link, useNavigate } from "react-router-dom";
import { useQueryClient, useMutation } from "@tanstack/react-query";
import { wishTheme } from "../../api/ThemeApi";
import { useEffect, useState } from "react";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";

const ThemePoster = ({ theme }) => {
  const navigator = useNavigate();
  const queryClient = useQueryClient();
  const themeLike = useMutation((themeId) => wishTheme(themeId), {
    onSuccess: (res) => {
      queryClient.invalidateQueries(["getThemeList"]);
      setLikeState(res.data.themeLikeCheck);
    },
  });

  const [likeState, setLikeState] = useState(theme.themeLikeCheck);
  useEffect(() => {
    if (likeState) {
      return setLikeState(theme.themeLikeCheck);
    } else {
      return setLikeState(theme.themeLikeCheck);
    }
  }, [theme]);

  return (
    <Container>
      <ThemePic>
        <img
          onClick={() => {
            navigator(`/theme/${theme.id}`);
          }}
          alt=""
          src={theme.themeImgUrl}
        />
      </ThemePic>
      <ThemeTextBox>
        <ThemeText>{theme.themeName}</ThemeText>
        <ThemeScore>⭐️ {theme.themeScore}</ThemeScore>
        <ThemeLike onClick={() => themeLike.mutate({ themeId: theme.id })}>
          {" "}
          {likeState ? <AiFillHeart color={"red"} /> : <AiOutlineHeart />}{" "}
        </ThemeLike>
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
  border-radius: 10px;
  transition: all 0.2s linear;
  :hover {
    transform: scale(1.02);
  }
`;

const ThemePic = styled.div`
  box-sizing: border-box;
  border: none;
  background-color: transparent;
  cursor: pointer;
  img {
    height: 190px;
    width: 225px;
    object-fit: cover;
    border-radius: 10px;
  }
`;
const ThemeTextBox = styled.div`
  position: relative;
  height: 100px;
  width: 100%;
  background-color: white;
  display: flex;
  flex-direction: column;
  border-radius: 10px;
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
  cursor: pointer;
`;
