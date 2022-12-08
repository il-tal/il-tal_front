import { useLocation, useNavigate, useParams } from "react-router-dom";
import styled from "styled-components";
import LoginRegisterForm from "../components/modal/LoginRegisterForm";
import Modal from "../components/modal/Modal";
import { useEffect, useState } from "react";
import { FiLogOut } from "react-icons/fi";
import { useRecoilState } from "recoil";
import { headerClicked, loginCheck } from "../api/store";
import SerchForm from "../components/serch/SertchForm";
import logo from "../asset/HeaderLogo.png";
import Swal from "sweetalert2";

const Header = () => {
  //페이지 이동에 사용
  const navigater = useNavigate();

  //로그인 모달창 토글 스테이트
  const [isLogin, setIsLogin] = useState(true);

  //로그인 체크 전역 스테이트
  const [loginState, setLoginState] = useRecoilState(loginCheck);

  //로그아웃
  const onLogout = () => {

    Swal.fire({
      title: "로그아웃 하시겠습니까?",
      text: "로그아웃을 하면 후기를 작성할 수 없어요! 😢",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "로그아웃",
      cancelButtonText: "취소",
    }).then((result) => {
      if (result.isConfirmed) {
        
        sessionStorage.removeItem("userinfo");
        sessionStorage.removeItem("access_token");
        sessionStorage.removeItem("refresh_token");
        setLoginState(false);
      }
    });

  };

  //로그인 체크 후 스테이트값 변경
  useEffect(() => {
    const userinformation = JSON.parse(sessionStorage.getItem("userinfo"));
    if (userinformation) {
      setLoginState(true);
    }
  }, [setLoginState]);

  //업체or테마 카테고리 눌린거 구분해주는 전역 스테이트
  const [isClicked, setIsClicked] = useRecoilState(headerClicked);
  const url = useLocation();

  //업체or테마 카테고리별 눌려있는 부분에 따라 스테이트 변경
  useEffect(() => {
    if (url.pathname === "/") {
      setIsClicked(0);
    } else if (url.pathname === "/company") {
      setIsClicked(1);
    } else if (url.pathname === "/theme") {
      setIsClicked(2);
    }
  }, [setIsClicked]);

  //로고 클릭시 홈이동
  const onClickLogo = () => {
    setIsClicked(0);
    navigater("/");
  };

  //업체 클릭시 업체페이지 이동
  const onClickCompany = () => {
    setIsClicked(1);
    navigater("/company");
  };

  //테마 클릭시 테마페이지 이동
  const onClickGenre = () => {
    setIsClicked(2);
    navigater("/theme");
  };

  return (
    <Container>
      <div className="layout">
        <div className="left-wrap">
          <div className="logo" onClick={onClickLogo}>
            <img src={logo} alt="logo" />
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
        <SerchForm />
        {loginState ? (
          <div className="login">
            <LoginBtn onClick={() => navigater("/myaccount")}>
              마이페이지
            </LoginBtn>{" "}
            <div
              onClick={() => {
                onLogout();

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
  border-bottom: 1px solid var(--color-border);
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
    width: 400px;
    display: flex;
  }
  .logo {
    height: 100%;
    width: 96px;
    margin-right: 80px;
    color: var(--color-main);
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
    font-weight: bold;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
  }
  .online {
    height: 100%;
    width: 98px;
    font-size: 21px;
    font-weight: bold;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    border-bottom: 5px solid var(--color-main);
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
