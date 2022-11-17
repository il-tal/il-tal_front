import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const Header = () => {
  const navigater = useNavigate();
  return (
    <Container>
      <HeaderWrap>
        <div onClick={() => navigater("/")}>집으로</div>
        <div> / </div>
        <div onClick={() => navigater("/test")}>실험실로</div>
      </HeaderWrap>
    </Container>
  );
};
export default Header;

const Container = styled.div`
  height: 50px;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  border-bottom: 1px solid gray;
  position: sticky;
  top: 0;
  background-color: white;
`;
const HeaderWrap = styled.div`
  height: 100%;
  width: 1000px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
