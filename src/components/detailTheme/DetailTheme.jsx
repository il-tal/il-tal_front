import styled from "styled-components";
import ThemeReview from "./ThemeReview";
const DetailTheme = () => {
  return (
    <Container>
      <ThemeInfoWrap>
        <ThemePicWrap>
          <ThemePic />
          <span>예약하기</span>
          <span>위치보기</span>
        </ThemePicWrap>

        <ThemeTextWrap>
          <ThemeInfo>
            <p>테마명</p>
            <p>업체명</p>
            <p>장르</p>
            <p>난이도</p>
            <p>추천인원</p>
            <p>플레이시간</p>
            <p>시놉시스</p>
          </ThemeInfo>
          <ThemePrice>
            <p>별점 댓글수 좋아요수</p>
            <p>가격</p>
          </ThemePrice>
        </ThemeTextWrap>
      </ThemeInfoWrap>
      <ThemeReview />
    </Container>
  );
};
export default DetailTheme;

const Container = styled.div`
  height: 100%;
  width: 100%;
`;

const ThemeInfoWrap = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
`;

const ThemePicWrap = styled.div`
  height: 100%;
  width: 100%;
`;

const ThemePic = styled.div`
  height: 300px;
  width: 250px;
  background-color: teal;
`;
const ThemeTextWrap = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
`;
const ThemeInfo = styled.div`
  height: 100%;
  width: 100%;
`;

const ThemePrice = styled.div`
  height: 100%;
  width: 100%;
`;
