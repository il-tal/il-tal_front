import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const Header = () => {
  const navigater = useNavigate();
  return (
    <Container>
      <div onClick={() => navigater("/")}>집으로</div>
      <div> / </div>
      <div onClick={() => navigater("/test")}>실험실로</div>
    </Container>
  );
};
export default Header;

const Container = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
`;
