import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import { getDetailTheme } from "../../api/ThemeApi";
import KakaoMap from "../map/KakaoMap";
import Modal from "../modal/Modal";
import ThemeReview from "./ThemeReview";
import ThemeSynopsis from "./ThemeSynopsis";
const DetailTheme = () => {
  //상세페이지 조회용 id
  const param = useParams();

  //카카오맵 모달창
  const [isMap, setIsMap] = useState(true);

  //테마 상세정보 조회 GET 요청 useQuery
  const { data, isLoading } = useQuery(["getDetail"], () =>
    getDetailTheme(param.id)
  );

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
          <ThemePic>
            <img src={data.data.themeImgUrl} />
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
            <Btn onClick={() => setIsMap(false)}>위치보기</Btn>
            <Btn
              onClick={() => window.open([`${data.data.themeUrl}`, "_black"])}
            >
              예약하기
            </Btn>
            <Btn>좋아요</Btn>
          </ThemeBtnWrap>
        </ThemeTextWrap>
      </ThemeInfoWrap>
      <ThemeSynopsis synopsis={data.data.synopsis} />
      <ThemeReview props={data.data} />
      {isMap ? null : (
        <Modal closeModal={() => setIsMap(true)}>
          <KakaoMap setClose={setIsMap} />
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
  height: 400px;
  width: 100%;
  display: flex;
`;

const ThemePicWrap = styled.div`
  height: 100%;
  width: 100%;
`;

const ThemePic = styled.div`
  height: 350px;
  width: 350px;
  background-color: teal;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  img {
    display: flex;
    object-fit: cover;
    width: 100%;
  }
`;
const ThemeTextWrap = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const TextGenre = styled.div`
  height: 30px;
  width: 100%;
  display: flex;
`;
const TextDifficulty = styled.div`
  height: 30px;
  width: 100%;
  display: flex;
`;
const TextPeople = styled.div`
  height: 30px;
  width: 100%;
  display: flex;
`;
const TextTime = styled.div`
  height: 30px;
  width: 100%;
  display: flex;
`;
const TextPrice = styled.div`
  height: 30px;
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
    height: 30px;
    width: 100px;
    font-size: 15px;
  }
  .content {
    font-size: 15px;
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
  height: 100%;
  width: 100%;
  margin: 5px 0;
  font-size: 15px;
`;
const ThemeTitle = styled.div`
  height: 100%;
  width: 100%;
  margin: 5px 0;
  font-size: 30px;
`;
const ThemeBtnWrap = styled.div`
  height: 50px;
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

const Btn = styled.div`
  height: 30px;
  width: 100px;
  border: 1px solid;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 13px;
`;
