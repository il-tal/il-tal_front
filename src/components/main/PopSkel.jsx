import styled from "styled-components";

const PopSkel = (props) => {
  return (
    <Container>
      <ThemePic height={props.height} width={props.width}></ThemePic>
    </Container>
  );
};
export default PopSkel;

const Container = styled.div`
  height: 100%;
  width: 100%;
  margin: 25px;
  display: flex;
  flex-direction: column;
`;
const ThemePic = styled.div`
  height: ${(props) => props.height}rem;
  width: ${(props) => props.width}rem;
  display: grid;
  grid-template-rows: 1.5fr 0fr 0.5fr;
  background-color: #e1e1e1;
`;
