import { useQuery } from "@tanstack/react-query";
import { useNavigate, useLocation } from "react-router-dom";
import { kakaologin2 } from "../../api";

const KakaoLogin = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const KAKAO_CODE = location.search.split("=")[1];

  const { data } = useQuery(["getkakaotoken"], () => kakaologin2(KAKAO_CODE), {
    onSuccess: (res) => {
      sessionStorage.setItem("access_token", res.headers.access_token);
      sessionStorage.setItem("refresh_token", res.headers.refresh_token);
      sessionStorage.setItem("userinfo", JSON.stringify(res.data));
      navigate("/");
    },
    onError: (err) => {
      alert("로그인에 실패했습니다.");
    },
  });

  return <div>Login...</div>;
};

export default KakaoLogin;
