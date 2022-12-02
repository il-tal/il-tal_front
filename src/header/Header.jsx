import { useLocation, useNavigate, useParams } from "react-router-dom";
import styled from "styled-components";
import LoginRegisterForm from "../components/modal/LoginRegisterForm";
import Modal from "../components/modal/Modal";
import { useEffect, useState } from "react";
import { FiLogOut } from "react-icons/fi";
import { useRecoilState } from "recoil";
import { headerClicked, loginCheck } from "../api/store";

const Header = () => {
  const navigater = useNavigate();
  const [isLogin, setIsLogin] = useState(true);
  const [loginState, setLoginState] = useRecoilState(loginCheck);
  const onLogout = () => {
    sessionStorage.removeItem("username");
    sessionStorage.removeItem("nickname");
    sessionStorage.removeItem("access_token");
    sessionStorage.removeItem("refresh_token");
    setLoginState(false);
  };

  useEffect(() => {
    const userinformation = JSON.parse(sessionStorage.getItem("userinfo"));
    if (userinformation) {
      setLoginState(true);
    }
  }, []);

  const [isClicked, setIsClicked] = useRecoilState(headerClicked);
  const url = useLocation();

  useEffect(() => {
    if (url.pathname === "/") {
      setIsClicked(0);
    } else if (url.pathname === "/company") {
      setIsClicked(1);
    } else if (url.pathname === "/theme") {
      setIsClicked(2);
    }
  }, [setIsClicked]);

  const onClickLogo = () => {
    setIsClicked(0);
    navigater("/");
  };
  const onClickCompany = () => {
    setIsClicked(1);
    navigater("/company");
  };
  const onClickGenre = () => {
    setIsClicked(2);
    navigater("/theme");
  };

  return (
    <Container>
      <div className="layout">
        <div className="left-wrap">
          <div className="logo" onClick={onClickLogo}>
            일탈
          </div>
          <div
            className={isClicked === 1 ? "online" : "noneline"}
            onClick={onClickCompany}
          >
            업체별
          </div>
          <div
            className={isClicked === 2 ? "online" : "noneline"}
            onClick={onClickGenre}
          >
            테마별
          </div>
        </div>
        {loginState ? (
          <div className="login">
            <LoginBtn onClick={() => navigater("/myaccount")}>
              마이페이지
            </LoginBtn>{" "}
            <div
              onClick={() => {
                onLogout();
                navigater("/");
              }}
            >
              <FiLogOut size="28" />
            </div>
          </div>
        ) : (
          <LoginBtn onClick={() => setIsLogin(false)}>로그인</LoginBtn>
        )}

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
  .login {
    display: flex;
    justify-content: center;
    align-items: center;
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
  width: 120px;
  border: none;
  font-size: 21px;
  background-color: transparent;
  cursor: pointer;
  cursor: pointer;
`;

const LogoutBtn = styled.button`
  height: 30px;
  width: 70px;
  border: 1px solid black;
  cursor: pointer;
`;
