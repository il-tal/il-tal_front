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
      <div className="layout">
        <div className="left-wrap">
          <div className="logo" onClick={() => navigater("/")}>
            일탈
          </div>
          <div className="noneline" onClick={() => navigater("/company")}>
            업체별
          </div>
          <div className="noneline" onClick={() => navigater("/theme")}>
            테마별
          </div>
        </div>
        <LoginBtn onClick={() => setIsLogin(false)}>로그인</LoginBtn>
        {isLogin ? null : (
          <Modal closeModal={() => setIsLogin(true)}>
            <RegisterForm />
          </Modal>
        )}
      </div>
    </Container>
  );
};
export default Header;

const Container = styled.div`
  height: 97px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  border-bottom: 1px solid gray;
  position: sticky;
  top: 0;
  background-color: white;
  z-index: 10;
  .layout {
    width: 1440px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .left-wrap {
    display: flex;
  }
  .logo {
    width: 220px;
    font-size: 36px;
    color: rgba(255, 183, 67, 1);
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
  }
  .isline {
    width: 98px;
    font-size: 21px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
  }
  .noneline {
    width: 98px;
    font-size: 21px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
  }
`;
const HeaderWrap = styled.div`
  height: 100%;
  width: 1000px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const LoginBtn = styled.button`
  width: 99px;
  border: none;
  font-size: 21px;
  background-color: transparent;
  cursor: pointer;
`;
