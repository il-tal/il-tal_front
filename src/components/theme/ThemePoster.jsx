import styled from "styled-components";

const ThemePoster = () => {
  return (
    <Container>
      <ThemePosterWrap>
        <ThemePic />
        <ThemeText>
          <span>테마이름</span>
          <span>테마</span>
          <span>♡</span> <br />
          <span>업체명</span>
          <br />
          <span>⭐️ 3.5(댓글수) </span>
          <span>♥︎16</span>
        </ThemeText>
      </ThemePosterWrap>
    </Container>
  );
};

export default ThemePoster;

const Container = styled.div`
  height: 100vh;
  width: 100vw;
  /* background-color: #eee6c4; */
`;

const ThemePosterWrap = styled.div`
  height: 360px;
  width: 330px;
  background-color: green;
  margin-left: 70px;
  margin-top: 30px;
`;

const ThemePic = styled.div`
  display: flex;
  justify-content: center;
  height: 280px;
  width: 280px;
  background-color: yellowgreen;
  border-radius: 3px;
`;

const ThemeText = styled.div`
  margin-top: 10px;
  margin-left: 5px;
  width: 100%;
  height: 100%;
`;
