import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import Maze from "../utils/Maze";

const ErrorPage = () => {
  const navigate = useNavigate();
  return (
    <ErrorBox>
      <Maze />
      <div>이런 탈출에 실패했습니다.</div>
      <div>아무래도 이쪽길이 아닌거 같습니다...</div>
      <button onClick={() => navigate("/")}>메인으로 돌아가기</button>
    </ErrorBox>
  );
};
export default ErrorPage;

const ErrorBox = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
