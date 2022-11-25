import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const RecommandTheme = (props) => {
  const navigate = useNavigate();
  return (
    <Container>
      <ThemePic
        img={props.themeImgUrl}
        onClick={() => {
          navigate(`/theme/${props.id}`);
        }}
      ></ThemePic>
      <ThemeText fontSize={1} fontWeight={100}>
        {props.companyName}
      </ThemeText>
      <ThemeText fontSize={1.25} fontWeight={700}>
        {props.themeName}
      </ThemeText>
    </Container>
  );
};
export default RecommandTheme;

const Container = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  box-shadow: 0.5rem 0.5rem 0.625rem #ababab;
`;
const ThemePic = styled.div`
  background-image: url(${(props) => props.img});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  height: 100%;
  width: 25rem;
  display: table-cell;
  background-color: #e1e1e1;
  box-shadow: 0.5rem 0.5rem 0.625rem #ababab;
`;

const ThemeText = styled.div`
  width: 25rem;
  font-size: ${(props) => props.fontSize}rem;
  font-weight: ${(props) => props.fontWeight};
  display: flex;
  align-items: center;
  text-align: left;
  background-color: #ffb743;
  box-shadow: 0.5rem 0.5rem 0.625rem #ababab;
`;
