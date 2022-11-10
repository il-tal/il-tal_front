import styled from "styled-components";
import Company from "./Company";

const CompanyList = () => {
  return (
    <Container>
      <Category></Category>
      <CompanyWrap>
        <Company />
        <Company />
        <Company />
        <h3>Company컴포넌트 맵 돌릴 위치</h3>
      </CompanyWrap>
    </Container>
  );
};
export default CompanyList;

const Container = styled.div`
  width: 100%;
  height: 100%;
`;

const Category = styled.div`
  width: 100%;
  height: 100%;
`;

const CompanyWrap = styled.div`
  width: 100%;
  height: 100%;
`;
