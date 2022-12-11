import styled from "styled-components";

const PopSkel = (props) => {
  return (
    <Container>
      <ThemeWrap>
        <ThemePic className="skeleton-loading" />
        <ThemeText className="skeleton-name" />
        <ThemeText className="skeleton-info" />
      </ThemeWrap>
    </Container>
  );
};
export default PopSkel;

const Container = styled.div`
  height: 448px;
  width: 280px;
  max-width: 448px;
  max-height: 280px;
  margin: 25px;
  display: table;
  flex-direction: column;
  background-color: #e1e1e1;
  border-radius: 8px;
`;

const ThemeWrap = styled.div`
  width: 448px;
  height: 280px;
  display: grid;
  grid-template-rows: 5fr 1fr 1fr;
`;

const ThemePic = styled.div`
  .skeleton-loading {
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
  .skeleton-name {
  }
  .skeleton-info {
  }
`;
