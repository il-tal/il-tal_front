import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const RecommandTheme = (props) => {
  const navigate = useNavigate();
  return (
    <Container>
      <ThemeWrap>
        <ThemePic
          onClick={() => {
            navigate(`/theme/${props.id}`);
          }}
        >
          <source srcSet={props.themeImgUrl} type="image/webp" />
          <img
            src={props.themeImgUrl}
            alt={props.themeName}
            className="themeImg"
          />
        </ThemePic>
        .
        <ThemeText fontSize={`20px`} fontWeight={100}>
          {props.companyName}
        </ThemeText>
        <ThemeText fontSize={`32px`} fontWeight={700}>
          {props.themeName}
        </ThemeText>
      </ThemeWrap>
    </Container>
  );
};
export default RecommandTheme;

const Container = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
`;

const ThemeWrap = styled.div`
  width: 350px;
  height: 250px;
  display: grid;
  grid-template-rows: 5fr 1fr 1fr;
`;

const ThemePic = styled.picture`
  min-width: 350px;
  min-height: 250px;
  max-width: 350px;
  max-height: 250px;
  position: absolute;
  object-fit: cover;
  margin: 0 auto;
  .themeImg {
    min-width: 350px;
    min-height: 250px;
    max-width: 350px;
    max-height: 250px;
    border-radius: 8px;
    object-fit: cover;
    filter: brightness(50%);
  }
`;

const ThemeText = styled.div`
  z-index: 1;
  max-width: 380px;
  font-size: ${(props) => props.fontSize};
  font-weight: ${(props) => props.fontWeight};
  display: flex;
  align-items: center;
  text-align: left;
  color: #fff;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;
