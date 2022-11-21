import styled from "styled-components";

const Footer = () => {
  const clorose = "https://github.com/clorose";
  const Hwirin_Kim = "https://github.com/Hwirin-Kim";
  const hyemin0901 = "https://github.com/hyemin0901";
  const Liam_Geni = "https://github.com/Liam-Geni";
  const ggggraceful = "https://github.com/ggggraceful";
  const soojin_dev = "https://github.com/soojin-dev";
  // const ogaeng1 = "https://github.com/ogaeng1";
  return (
    <Container>
      <STFooter>
        Copyright &copy; 2022
        <li>Designed by </li>
        <li>전현주</li>
        <ul>FE</ul>
        <li onClick={() => window.open(clorose)}>정영훈</li>
        <li onClick={() => window.open(Hwirin_Kim)}>김휘린</li>
        <li onClick={() => window.open(hyemin0901)}>박혜민</li>
        <li>BE</li>
        <li onClick={() => window.open(Liam_Geni)}>이기재</li>
        <li onClick={() => window.open(ggggraceful)}>남궁은</li>
        <li onClick={() => window.open(soojin_dev)}>한수진</li>
      </STFooter>
    </Container>
  );
};

export default Footer;

const Container = styled.footer`
  width: 100%;
  margin-top: 2rem;
  height: 2rem;
  background-color: #6d7270;
`;

const STFooter = styled.div`
  display: flex;
`;
