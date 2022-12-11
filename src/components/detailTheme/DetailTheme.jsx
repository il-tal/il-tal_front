import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import styled from "styled-components";
import { getDetailTheme, wishTheme } from "../../api/ThemeApi";
import KakaoMap from "../map/KakaoMap";
import Modal from "../modal/Modal";
import ThemeReview from "./ThemeReview";
import ThemeSynopsis from "./ThemeSynopsis";
import { BsSuitHeartFill, BsSuitHeart } from "react-icons/bs";
import { useRecoilValue } from "recoil";
import { loginCheck } from "../../api/store";
import Swal from "sweetalert2";
import ThemePicComponent from "./ThemePicComponent";
const DetailTheme = () => {
  //상세페이지 조회용 id
  const { id } = useParams();

  //로그인 유무 판별
  const loginCheckState = useRecoilValue(loginCheck);

  //포스터 사진 모달창
  const [isPic, setIsPic] = useState(true);

  //navigate
  const navigate = useNavigate();

  //테마 상세정보 조회 GET 요청 useQuery
  const { data, isLoading } = useQuery(["getDetail", loginCheckState], () =>
    getDetailTheme(id)
  );

  //데이터 refetch를 위한 쿼리클라이언트
  const queryClient = useQueryClient();

  //좋아요 회원만 가능하도록 알람띄우기
  const likeOnlyMemeber = () => {
    if (loginCheckState) {
      themeLike.mutate({ themeId: id });
    } else {
      Swal.fire({
        title: "로그인 후 이용하세요!",
        text: "비회원은 좋아요를 보낼수 없어요 😢",
        icon: "warning",
      });
    }
  };

  //좋아요기능 mutation
  const themeLike = useMutation((themeId) => wishTheme(themeId), {
    onSuccess: () => {
      queryClient.invalidateQueries(["getDetail"]);
    },
  });

  const difficult = () => {
    if (data.data.difficulty > 4) {
      return "매우어려움";
    } else if (data.data.difficulty > 3) {
      return "어려움";
    } else if (data.data.difficulty > 2) {
      return "보통";
    } else if (data.data.difficulty > 1) {
      return "쉬움";
    } else if (data.data.difficulty > 0) {
      return "매우쉬움";
    }
  };

  //로딩처리
  if (isLoading) {
    return <div>로딩중..</div>;
  }
  return (
    <Container>
      <ThemeInfoWrap>
        <ThemePicWrap>
          <ThemePic onClick={() => setIsPic(false)}>
            <img src={data.data.themeImgUrl} alt="themePic" />
          </ThemePic>
        </ThemePicWrap>

        <ThemeTextWrap>
          <ThemeHeaderWrap>
            <ThemeCompany>{data.data.companyName}</ThemeCompany>
            <ThemeTitle>{data.data.themeName}</ThemeTitle>
          </ThemeHeaderWrap>

          <ThemeInfo>
            <TextGenre>
              <div className="type">장르</div>
              <div className="content">{data.data.genre}</div>
            </TextGenre>
            <TextDifficulty>
              <div className="type">난이도</div>
              <div className="content">{difficult(data.data.difficulty)}</div>
            </TextDifficulty>
            <TextPeople>
              <div className="type">인원</div>
              <div className="content">
                {data.data.minPeople}인~{data.data.maxPeople}인
              </div>
            </TextPeople>
            <TextTime>
              <div className="type">제한시간</div>
              <div className="content">{data.data.playTime}분</div>
            </TextTime>
            <TextPrice>
              <div className="type">가격</div>
              <div className="content">{data.data.price}원</div>
            </TextPrice>
          </ThemeInfo>
          <ThemeBtnWrap>
            <div onClick={() => likeOnlyMemeber()}>
              {data.data.themeLikeCheck ? (
                <Btn>
                  {<BsSuitHeartFill color="var(--color-main)" size="20" />}
                  좋아요 {data.data.totalLikeCnt}
                </Btn>
              ) : (
                <Btn>
                  {<BsSuitHeart size="20" />} 좋아요 {data.data.totalLikeCnt}
                </Btn>
              )}
            </div>
            <Btn onClick={() => navigate(`/company/${data.data.companyId}`)}>
              업체보기
            </Btn>
            <Btn2 onClick={() => window.open([`${data.data.themeUrl}`])}>
              예약하기
            </Btn2>
          </ThemeBtnWrap>
        </ThemeTextWrap>
      </ThemeInfoWrap>
      <ThemeSynopsis synopsis={data.data.synopsis} />
      <ThemeReview props={data.data} />
      {isPic ? null : (
        <Modal closeModal={() => setIsPic(true)}>
          <ThemePicComponent setClose={setIsPic} pic={data.data.themeImgUrl} />
        </Modal>
      )}
    </Container>
  );
};
export default DetailTheme;

const Container = styled.div`
  height: 100%;
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ThemeInfoWrap = styled.div`
  height: 610px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-sizing: border-box;
`;

const ThemePicWrap = styled.div`
  height: 464px;
  width: 684px;
  margin-right: 30px;
`;

const ThemePic = styled.div`
  height: 464px;
  width: 684px;

  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  cursor: pointer;
  img {
    display: flex;
    object-fit: cover;
    width: 100%;
  }
`;
const ThemeTextWrap = styled.div`
  height: 464px;
  width: 800px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const TextGenre = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
`;
const TextDifficulty = styled.div`
  width: 100%;
  display: flex;
`;
const TextPeople = styled.div`
  width: 100%;
  display: flex;
`;
const TextTime = styled.div`
  width: 100%;
  display: flex;
`;
const TextPrice = styled.div`
  width: 100%;
  display: flex;
`;

const ThemeInfo = styled.div`
  height: 100%;
  width: 100%;
  margin: 10px 0px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  .type {
    height: 50px;
    width: 130px;
    font-size: 20px;
    color: grey;
    display: flex;
    align-items: center;
  }
  .content {
    font-size: 20px;
    height: 50px;
    display: flex;
    align-items: center;
  }
`;

const ThemeHeaderWrap = styled.div`
  height: 60px;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const ThemeCompany = styled.div`
  height: 23px;
  width: 830px;

  font-size: 20px;
  color: grey;
`;
const ThemeTitle = styled.div`
  height: 52px;
  width: 830px;
  margin-top: 20px;
  font-size: 40px;
  font-weight: bold;
`;
const ThemeBtnWrap = styled.div`
  height: 50px;
  width: 700px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 16px;
`;

const Btn = styled.div`
  height: 48px;
  width: 220px;
  border: 1px solid;
  border-radius: 8px;
  display: flex;
  justify-content: center;
  align-items: center;

  cursor: pointer;
`;
const Btn2 = styled.div`
  height: 48px;
  width: 220px;
  color: white;
  border-radius: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: var(--color-main);

  cursor: pointer;
`;
