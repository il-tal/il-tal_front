import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { wishTheme } from "../../api/ThemeApi";
import lock from "../../asset/lock.png";

const CompanyTheme = ({ theme }) => {
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  const themeLike = useMutation(() => wishTheme({ themeId: theme.id }), {
    onSuccess: (res) => {
      queryClient.invalidateQueries(["getDetailCompany"]);
    },
  });

  return (
    <Container>
      <ThemePic>
        <img
          alt="themepic"
          src={theme.themeImgUrl}
          onClick={() => navigate(`/theme/${theme.id}`)}
        />
      </ThemePic>
      <ThemeInfo>
        <ThemeText>
          <div className="body-wrap">
            <span className="genre">{theme.genre}</span>
            <span className="title">{theme.themeName}</span>
            <div>
              <span className="star">★</span>
              <span className="review">{theme.themeScore}</span>
            </div>
            <span className="price">{theme.price}원</span>
          </div>
          <div className="info-like-wrap">
            <span>
              난이도{" "}
              {[...Array(theme.difficulty)].map((arg, index) => {
                return <img src={lock} alt="lock" key={`key${index}`} />;
              })}{" "}
              | {theme.minPeople}~{theme.maxPeople}명 | {theme.playTime}분
            </span>

            <button className="like-btn" onClick={() => themeLike.mutate()}>
              ❤ 좋아요 {theme.totalLikeCnt}
            </button>
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
  border-radius: 10px;
  transition: all 0.1s linear;
  border: 1px solid #8a8a8a;
  overflow: hidden;
  &:hover {
    box-shadow: 0 4px 15px 1px rgba(6, 195, 135, 0.25);
    border: 1px solid var(--color-main);
  }
`;
const ThemePic = styled.div`
  height: 280px;
  width: 440px;
  cursor: pointer;
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
    .star {
      font-size: 23px;
      color: var(--color-main);
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
      cursor: pointer;
    }
  }
`;
