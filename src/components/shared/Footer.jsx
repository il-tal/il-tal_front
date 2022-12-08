import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { CTBox, CTSpan } from "../../styles/themeStyle";

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
      <CTBox
        size="2rem"
        weight="bold"
        color="#ffb743"
        margin={`0 50px`}
        display="flex"
        place="center"
      >
        일탈
      </CTBox>
      <STFooter>
        <CTSpan
          size="1.5rem"
          margin="10px"
          color="#ffffff"
          onClick={() => {
            navigate("/test");
          }}
        >
          Copyright &copy; 2022
        </CTSpan>
        <CTSpan margin="8px" color="#ffffff">
          UI/UX
        </CTSpan>
        <CTSpan margin="5px" color="#ffffff">
          전현주
        </CTSpan>
        <CTSpan margin="8px" color="#ffffff">
          FE
        </CTSpan>
        <CTSpan
          margin="5px"
          color="#ffffff"
          onClick={() => window.open(clorose)}
        >
          정영훈
        </CTSpan>
        <CTSpan
          margin="5px"
          color="#ffffff"
          onClick={() => window.open(hwirin_Kim)}
        >
          김휘린
        </CTSpan>
        <CTSpan
          margin="5px"
          color="#ffffff"
          onClick={() => window.open(hyemin0901)}
        >
          박혜민
        </CTSpan>
        <CTSpan margin="8px" color="#ffffff">
          BE
        </CTSpan>
        <CTSpan
          margin="5px"
          color="#ffffff"
          onClick={() => window.open(liam_Geni)}
        >
          이기재
        </CTSpan>
        <CTSpan
          margin="5px"
          color="#ffffff"
          onClick={() => window.open(ggggraceful)}
        >
          남궁은
        </CTSpan>
        <CTSpan
          margin="5px"
          color="#ffffff"
          onClick={() => window.open(soojin_dev)}
        >
          한수진
        </CTSpan>
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

const STFooter = styled.div`
  display: flex;
  margin: 0 auto;
  align-items: center;
  text-align: right;
  color: #fefefe;
`;
