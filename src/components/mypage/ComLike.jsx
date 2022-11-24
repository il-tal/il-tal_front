import styled from "styled-components";

const ComLike = (props) => {
  return (
    <>
      <ComLikeBox themeImgUrl={props.themeImgUrl}>
        <div></div>
        <ThemeLabel>
          <CompanyName>{props.companyName}</CompanyName>
          <ThemeName>{props.themeName}</ThemeName>
        </ThemeLabel>
      </ComLikeBox>
    </>
  );
};

export default ComLike;

const ComLikeBox = styled.div`
  background-image: url(${(props) => props.themeImgUrl});
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  width: 11.25rem;
  height: 11.25rem;
  background-color: green;
  display: grid;
  grid-template-rows: 5fr 1fr;
  margin: 15px;
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
