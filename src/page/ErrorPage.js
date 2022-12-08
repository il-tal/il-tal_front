import { useNavigate } from "react-router-dom";
import styled from "styled-components";

/** 미로 제작 알고리즘 만들어서 넣어보기? */
const ErrorPage = () => {
  const navigate = useNavigate();
  return (
    <ErrorBox>
      <div>이런 탈출에 실패했습니다.</div>
      <div>아무래도 이쪽길이 아닌거 같습니다...</div>
      <button onClick={() => navigate("/")}>왔던곳으로 돌아가기</button>
    </ErrorBox>
  );
};
export default ErrorPage;

const ErrorBox = styled.div`
  width: 100%;
  height: 100vh;
`;
