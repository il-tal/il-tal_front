import { useLocation, useNavigate, useParams } from "react-router-dom";
import styled from "styled-components";
import LoginRegisterForm from "../components/modal/LoginRegisterForm";
import Modal from "../components/modal/Modal";
import { useEffect, useState } from "react";
import { set } from "date-fns";
import { useRecoilState } from "recoil";
import { headerClicked } from "../api/store";

const Header = () => {
  const navigater = useNavigate();
  const [isLogin, setIsLogin] = useState(true);
  const onLogout = () => {
    sessionStorage.removeItem("username");
    sessionStorage.removeItem("nickname");
    sessionStorage.removeItem("access_token");
    sessionStorage.removeItem("refresh_token");
  };

  const [showLogin, setShowLogin] = useState(true);

  return (
    <Container>
      <div className="layout">
        <div className="left-wrap">
          <div className="logo" onClick={onClickLogo}>
            일탈
          </div>
          <div className="noneline" onClick={() => navigater("/company")}>
            업체별
          </div>
          <div className="noneline" onClick={() => navigater("/theme")}>
            테마별
          </div>
        </div>

        <div className="right-wrap">
          <Btn onClick={() => navigater("/myaccount")}>마이페이지</Btn>
          <Btn onClick={() => setIsLogin(false)}>로그인</Btn>
          <Btn onClick={onLogout}>로그아웃</Btn>
        </div>
        {isLogin ? null : (
          <Modal closeModal={() => setIsLogin(true)}>
            <LoginRegisterForm setIsLogin={setIsLogin} />
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
    height: 92%;
    width: 1440px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .left-wrap {
    height: 100%;
    display: flex;
  }
  .logo {
    height: 100%;
    width: 220px;
    font-size: 36px;
    color: rgba(255, 183, 67, 1);
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
  }

  .isline {
    height: 100%;
    width: 98px;
    font-size: 21px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
  }
  .noneline {
    height: 100%;
    width: 98px;
    font-size: 21px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
  }
  .online {
    height: 100%;
    width: 98px;
    font-size: 21px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    border-bottom: 4px solid rgba(255, 183, 67, 1);
  }
`;

const HeaderWrap = styled.div`
  height: 100%;
  width: 1000px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Btn = styled.button`
  width: 110px;
  border: none;
  font-size: 21px;
  background-color: transparent;
  cursor: pointer;
`;

// const LogoutBtn = styled.button`
//   height: 30px;
//   width: 70px;
//   border: 1px solid black;
//   cursor: pointer;
// `;
