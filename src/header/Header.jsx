import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import LoginRegisterForm from "../components/modal/LoginRegisterForm";
import Modal from "../components/modal/Modal";
import { useState } from "react";

const Header = () => {
  const navigater = useNavigate();
  const [isLogin, setIsLogin] = useState(true);
  const onLogout = () => {
    sessionStorage.removeItem("username");
    sessionStorage.removeItem("access_token");
    sessionStorage.removeItem("refresh_token");
  }
  return (
    <Container>

      <LoginBtn onClick={() => setIsLogin(false)}>로그인</LoginBtn>
      <LogoutBtn
        onClick={() => {
          onLogout();
        }}>
        로그아웃
      </LogoutBtn>

      <div onClick={() => navigater("/")}>집으로</div>
      <div> / </div>
      <div onClick={() => navigater("/test")}>실험실로</div>
      {isLogin ? null : (
        <Modal closeModal={() => setIsLogin(!isLogin)}>
          <LoginRegisterForm setIsLogin={setIsLogin}/>
        </Modal>
      )}

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

const LoginBtn = styled.button`
  height: 30px;
  width: 70px;
  border: 1px solid black;
  cursor: pointer;
`;

const LogoutBtn = styled.button`
  height: 30px;
  width: 70px;
  border: 1px solid black;
  cursor: pointer;
`;
