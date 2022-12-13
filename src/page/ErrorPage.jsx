import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import Maze from "../utils/Maze";
// import error css
import "./ErrorPage.css";

const ErrorPage = () => {
  const navigate = useNavigate();
  return (
    <ErrorBox>
      <Maze />
      <div class="container">
        <div class="neon" onClick={() => navigate("/")}>
          404
        </div>
        <div class="flux" onClick={() => navigate("/")}>
          PAGE NOT FOUND
        </div>
      </div>
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
  background-color: #000;
`;
