import styled from "styled-components";

const ThemeFilter = () => {
  return (
    <Container>
      <FilterWrap>
        <p>지역별</p>
        <Location>
          <span>전체지역</span>
          <span>강남</span>
          <span>홍대</span>
          <span>신촌</span>
          <span>건대</span>
          <span>대학로</span>
        </Location>
        <p>장르</p>
        <Genre>
          <span>전체</span>
          <span>추리</span>
          <span>공포</span>
          <span>액션</span>
          <span>감성</span>
          <span>19금</span>
        </Genre>
        <p>평점</p>
        <Grade>
          <span>⭐️</span>
          <span>⭐️⭐️</span>
          <span>⭐️⭐️⭐️</span>
          <span>⭐️⭐️⭐️⭐️</span>
          <span>⭐️⭐️⭐️⭐️⭐️</span>
        </Grade>
        <p>난이도</p>
        <Difficulty>
          <span>🔒</span>
          <span>🔒🔒</span>
          <span>🔒🔒🔒</span>
          <span>🔒🔒🔒🔒</span>
          <span>🔒🔒🔒🔒🔒</span>
        </Difficulty>
        <p>예약 가능 인원</p>
        <RecommendPeoPle>
          <span>전체</span>
          <span>혼방</span>
          <span>2인</span>
          <span>3인</span>
          <span>4인</span>
          <span>5인이상</span>
        </RecommendPeoPle>
      </FilterWrap>
    </Container>
  );
};
export default ThemeFilter;

const Container = styled.div`
  height: 370px;
  width: 100%;
  display: flex;
  justify-content: center;
  /* align-items: center; */
  background-color: #eee6c4;
`;

const FilterWrap = styled.div`
  height: 100%;
  width: 90%;
  /* cursor: pointer; */
  border: 1px solid red;
`;

const Location = styled.div``;

const Genre = styled.div``;

const Grade = styled.div`
  word-spacing: 8px;
`;

const Difficulty = styled.div``;

const RecommendPeoPle = styled.div``;
