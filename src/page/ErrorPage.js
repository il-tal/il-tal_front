import { useNavigate } from "react-router-dom";

const ErrorPage = () => {
  const navigate = useNavigate();
  return (
    <>
      <div>뭘 찾아 오셨나요</div>
      <button onClick={()=>navigate('/')}>집으로 돌아가기</button>
    </>
  )
}
export default ErrorPage;