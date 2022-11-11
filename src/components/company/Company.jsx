import styled from "styled-components";
import ThemePoster from "./ThemePoster";
//ThemeWrap에서 ThemePoster는 페이징처리하여 3개씩 보여주기

const Company = () => {
  return (
    <Container>
      <CompanyWrap>
        <CompanyPic />
        <CompanyText>업체명★</CompanyText>
      </CompanyWrap>
      <ThemeWrap>
        <ThemePoster />
        <ThemePoster />
        <ThemePoster />
        <h3>여기에 ThemePoster 컴포넌트 맵 돌리기</h3>
      </ThemeWrap>
    </Container>
  );
};

export default Company;

const Container = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
`;

const CompanyWrap = styled.div`
  height: 100%;
  width: 100%;
`;

const CompanyPic = styled.div`
  height: 200px;
  width: 200px;
  background-color: teal;
`;

const CompanyText = styled.div`
  background-color: tomato;
`;

const ThemeWrap = styled.div`
  height: 300px;
  width: 100%;
  display: flex;
`;
