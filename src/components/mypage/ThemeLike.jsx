import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { DibBox, DibImg } from "./StyledLike";

const ThemeLike = (props) => {
  const navigate = useNavigate();
  return (
    <DibBox
      onClick={() => {
        navigate(`/theme/${props.id}`);
      }}
    >
      <>1</>
      <DibImg src={props.ImgUrl} alt={"이미지"}></DibImg>
      <CompanyName>{props.companyName}</CompanyName>
      <ThemeName>{props.themeName}</ThemeName>
    </DibBox>
  );
};

export default ThemeLike;

const CompanyName = styled.div`
  z-index: 1;
  max-width: 280px;
  font-size: 24px;
  font-weight: bold;
  color: white;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

const ThemeName = styled.div`
  z-index: 1;
  max-width: 200px;
  font-size: 16px;
  color: white;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;
