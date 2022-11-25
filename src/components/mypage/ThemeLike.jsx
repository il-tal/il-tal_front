import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const ThemeLike = (props) => {
  const navigate = useNavigate();
  return (
    <ThemeLikeBox
      themeImgUrl={props.themeImgUrl}
      onClick={() => {
        navigate(`/theme/${props.id}`);
      }}
    >
      <div></div>
      <ThemeLabel>
        <CompanyName>{props.companyName}</CompanyName>
        <ThemeName>{props.themeName}</ThemeName>
      </ThemeLabel>
    </ThemeLikeBox>
  );
};

export default ThemeLike;

const ThemeLikeBox = styled.div`
  background-image: url(${(props) => props.themeImgUrl});
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  width: 14.5rem;
  height: 14.5rem;
  display: grid;
  grid-template-rows: 5fr 1fr;
  margin: 25px;
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
