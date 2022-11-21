import { useState } from "react";
import styled from "styled-components";
import KakaoMap from "../map/KakaoMap";
import Modal from "../modal/Modal";
import ThemeReview from "./ThemeReview";
import ThemeSynopsys from "./ThemeSynopsis";
const DetailTheme = () => {
  const [isMap, setIsMap] = useState(true);
  return (
    <Container>
      <ThemeInfoWrap>
        <ThemePicWrap>
          <ThemePic>
            <img src="http://www.murderparker.com/upload_file/room/1(13).jpg" />
          </ThemePic>
        </ThemePicWrap>

        <ThemeTextWrap>
          <ThemeHeaderWrap>
            <ThemeCompany>업체명</ThemeCompany>
            <ThemeTitle>테마이름</ThemeTitle>
          </ThemeHeaderWrap>

          <ThemeInfo>
            <TextGenre>
              <div className="type">장르</div>
              <div className="content">공포</div>
            </TextGenre>
            <TextDifficulty>
              <div className="type">난이도</div>
              <div className="content">어려움</div>
            </TextDifficulty>
            <TextPeople>
              <div className="type">인원</div>
              <div className="content">2~4명</div>
            </TextPeople>
            <TextTime>
              <div className="type">제한시간</div>
              <div className="content">70분</div>
            </TextTime>
            <TextPrice>
              <div className="type">가격</div>
              <div className="content">
                40,000원 (2인기준, 1인당 10,000원 추가)
              </div>
            </TextPrice>
          </ThemeInfo>
          <ThemeBtnWrap>
            <Btn onClick={() => setIsMap(false)}>위치보기</Btn>
            <Btn>예약하기</Btn>
            <Btn>좋아요</Btn>
          </ThemeBtnWrap>
        </ThemeTextWrap>
      </ThemeInfoWrap>
      <ThemeSynopsys />
      <ThemeReview />
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
