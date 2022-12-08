import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const Test = () => {
  const navigate = useNavigate();
  return (
    <Cockpit>
      <FlightDeck onClick={() => navigate("/")}>메인</FlightDeck>

      <FlightDeck onClick={() => navigate("/theme")}>테마</FlightDeck>

      <FlightDeck onClick={() => navigate("/theme/1")}>
        테마 상세보기
      </FlightDeck>

      <FlightDeck onClick={() => navigate("/company")}>업체</FlightDeck>

      <FlightDeck onClick={() => navigate("/company/1")}>
        업체 상세보기
      </FlightDeck>

      <FlightDeck onClick={() => navigate("/myaccount")}>내 정보</FlightDeck>

      <FlightDeck onClick={() => navigate("/error")}>에러 페이지</FlightDeck>
    </Cockpit>
  );
};
export default Test;

const Cockpit = styled.div`
  min-width: 100%;
  min-height: 100%;
  width: 100vw;
  height: 100vh;
  display: grid;
  grid-template-columns: repeat(3, minmax(100px, auto));
  background-color: #a9b779;
`;

const FlightDeck = styled.button`
  min-width: 250px;
  min-height: 150px;
  margin: 20px auto;
  padding: 50px;
  outline: 3px solid;
`;
