import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const RecommandTheme = (props) => {
  const navigate = useNavigate();
  return (
    <Container>
      <ThemeWrap>
        <ThemePic
          alt="props.id"
          src={props.themeImgUrl}
          onClick={() => {
            navigate(`/theme/${props.id}`);
          }}
        />
        <>1</>
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
  width: 400px;
  height: 250px;
  display: grid;
  grid-template-rows: 5fr 1fr 1fr;
`;

const ThemePic = styled.img`
  filter: brightness(50%);
  min-width: 400px;
  min-height: 250px;
  max-width: 400px;
  max-height: 250px;
  border-radius: 8px;
  position: absolute;
  object-fit: cover;
  margin: 0 auto;
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
