import { useNavigate, useLocation } from "react-router-dom";
import styled from "styled-components";

const KakaoLogin = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const KAKAO_CODE = location.search.split.split("=")[1];

  const getKakaoToken = () => {
    fetch(`https://kauth.kakao.com/oauth/token`);
  };
};

export default KakaoLogin;
