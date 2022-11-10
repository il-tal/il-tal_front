import styled from "styled-components";
import CompanyTheme from "./CompanyTheme";

const DetailCompany = () => {
  return (
    <Container>
      <CompanyWrap>
        <CompanyPic>사진</CompanyPic>
        <CompanyText>여기에는 텍스트가 들어갑니다</CompanyText>
        <CompanyMap>여기는 지도가 들어감</CompanyMap>
      </CompanyWrap>
      <ThemeWrap>
        <CompanyTheme />

        {/* <h3>여기에 CompanyTheme 컴포넌트 map돌리기</h3> */}
      </ThemeWrap>
    </Container>
  );
};
export default DetailCompany;

const Container = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const CompanyWrap = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  background-color: grey;
`;
const CompanyPic = styled.div`
  height: 200px;
  width: 200px;
  background-color: tomato;
`;

const CompanyText = styled.div`
  height: 200px;
  width: 200px;
`;

const CompanyMap = styled.div`
  height: 300px;
  width: 300px;
  background-color: skyblue;
`;

const ThemeWrap = styled.div`
  height: 100%;
  width: 100%;
`;
