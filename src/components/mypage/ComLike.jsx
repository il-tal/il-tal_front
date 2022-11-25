import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const ComLike = (props) => {
  const navigate = useNavigate();
  return (
    <ComLikeBox
      onClick={() => {
        navigate(`/company/${props.id}`);
      }}
    >
      <DivImg src={props.companyImgUrl} alt={"이미지"}></DivImg>
      <ThemeLabel>
        <CompanyName>{props.companyName}</CompanyName>
      </ThemeLabel>
    </ComLikeBox>
  );
};

export default ComLike;

const ComLikeBox = styled.div`
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  width: 14.5rem;
  height: 14.5rem;
  background-color: #d2d2d2;
  display: grid;
  grid-template-rows: 5fr 1fr;
  margin: 25px;
`;

const DivImg = styled.img`
  width: 100%;
  height: 100%;
`;

const ThemeLabel = styled.div`
  background-color: gray;
`;
const CompanyName = styled.div`
  font-size: 1.25rem;
  font-weight: bold;
  color: white;
`;
const ThemeName = styled.div`
  font-size: 1rem;
  color: white;
`;
