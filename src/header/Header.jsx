import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import LoginForm from "../components/modal/LoginForm";
import RegisterForm from "../components/modal/RegisterForm";
import Modal from "../components/modal/Modal";
import { useState } from "react";

const Header = () => {
  const navigater = useNavigate();
  const [isLogin, setIsLogin] = useState(true);

  return (
    <Container>
      <LoginBtn onClick={() => setIsLogin(false)}>로그인</LoginBtn>
      <div onClick={() => navigater("/")}>집으로</div>
      <div> / </div>
      <div onClick={() => navigater("/test")}>실험실로</div>
      {isLogin ? null : (
        <Modal closeModal={() => setIsLogin(true)}>
          <RegisterForm />
        </Modal>
      )}
    </Container>
  );
};
export default Header;

const Container = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
`;

const LoginBtn = styled.button`
  height: 30px;
  width: 70px;
  border: 1px solid black;
`;
