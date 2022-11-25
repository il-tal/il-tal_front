import { useNavigate } from "react-router-dom";

export const useMove = (props) => {
  const navigate = useNavigate();
  console.log(props);
}