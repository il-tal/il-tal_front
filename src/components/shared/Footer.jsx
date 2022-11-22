import styled from "styled-components";

const Footer = () => {
  const clorose = "https://github.com/clorose";
  const hwirin_Kim = "https://github.com/Hwirin-Kim";
  const hyemin0901 = "https://github.com/hyemin0901";
  const liam_Geni = "https://github.com/liam-Geni";
  const ggggraceful = "https://github.com/ggggraceful";
  const soojin_dev = "https://github.com/soojin-dev";
  // const ogaeng1 = "https://github.com/ogaeng1";
  return (
    <Container>
      <Logo>로고</Logo>
      <STFooter>
        Copyright &copy; 2022
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
    </Container>
  );
};

export default Footer;

const Container = styled.footer`
  width: 100%;
  margin-top: 2rem;
  height: 5rem;
  background-color: #0e0e0e;
  display: grid;
  grid-template-columns: 1fr 1fr;
`;

const Logo = styled.div`
  display: flex;
  margin: 0 30px;
  align-items: center;
  color: #fefefe;
`;

const STFooter = styled.div`
  display: flex;
  margin: 0 auto;
  align-items: center;
  text-align: right;
  color: #fefefe;
`;

const DevPart = styled.span`
  margin: 3px;
  font-size: 1.25rem;
`;

const DevInfo = styled.span`
  margin: 5px;
`;
