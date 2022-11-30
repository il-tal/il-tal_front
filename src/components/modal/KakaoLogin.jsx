import { useNavigate, useLocation } from "react-router-dom";

const KakaoLogin = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const KAKAO_CODE = location.search.split("=")[1];

  return <></>;
};

export default KakaoLogin;
