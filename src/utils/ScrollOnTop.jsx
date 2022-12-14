import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollOnTop() {
  //패스네임이 바뀌면 스크롤을 0,0으로 옮기는 역할을 함
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}
