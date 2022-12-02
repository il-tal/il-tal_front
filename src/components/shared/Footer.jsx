import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const Footer = () => {
  const clorose = "https://github.com/clorose";
  const hwirin_Kim = "https://github.com/Hwirin-Kim";
  const hyemin0901 = "https://github.com/hyemin0901";
  const liam_Geni = "https://github.com/liam-Geni";
  const ggggraceful = "https://github.com/ggggraceful";
  const soojin_dev = "https://github.com/soojin-dev";
  // const ogaeng1 = "https://github.com/ogaeng1";
  const navigate = useNavigate();
  return (
    <Container>
      <div className="layout">
        <Logo>로고</Logo>
        <STFooter>
          <span
            onClick={() => {
              navigate("/test");
            }}
          >
            Copyright &copy; 2022
          </span>
          <DevPart>UI/UX</DevPart>
          <DevInfo>전현주</DevInfo>
          <DevPart>FE</DevPart>
          <DevInfo onClick={() => window.open(clorose)}>정영훈</DevInfo>
          <DevInfo onClick={() => window.open(hwirin_Kim)}>김휘린</DevInfo>
          <DevInfo onClick={() => window.open(hyemin0901)}>박혜민</DevInfo>
          <DevPart>BE</DevPart>
          <DevInfo onClick={() => window.open(liam_Geni)}>이기재</DevInfo>
          <DevInfo onClick={() => window.open(ggggraceful)}>남궁은</DevInfo>
          <DevInfo onClick={() => window.open(soojin_dev)}>한수진</DevInfo>
        </STFooter>
      </div>
    </Container>
  );
};

export default Footer;

const Container = styled.footer`
  width: 100vw;
  margin-top: 2rem;
  height: 175px;
  border-top: 1px solid gray;
  display: flex;
  justify-content: center;
  align-items: center;
  grid-template-columns: 1fr 1fr;
  .layout {
    height: 92%;
    width: 1440px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
`;

const Logo = styled.div`
  display: flex;
  margin: 0 30px;
  align-items: center;
  font-size: 48px;
  color: rgba(255, 183, 67, 1); ;
`;

const STFooter = styled.div`
  display: flex;

  align-items: center;

  color: grey;
`;

const DevPart = styled.span`
  margin: 3px;
  font-size: 1.25rem;
`;

const DevInfo = styled.span`
  margin: 5px;
`;
