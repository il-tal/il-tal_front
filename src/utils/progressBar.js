import styled from "styled-components";

/**
 *  @param { Colors } bgcolor 색깔
 *  @param { Integer } completed 달성치
 *  @param { Integer } goal 목표치
 *  @param { Integer } height 높이 `1.2rem`
 */
const ProgressBar = (props) => {
  const { bgcolor, completed, goal, height, width, shadow } = props;
  return (
    <Container height={height} width={width}>
      <FillerStyles color={bgcolor} completed={(completed / goal) * 100} shadow={shadow}>
        <LabelStyles shadow={shadow}>{completed===0 ? "":`${completed}/${goal}`}</LabelStyles>
      </FillerStyles>
    </Container>
  );
};

const Container = styled.div`
  height: ${(props) => props.height};
  width: ${(props) => props.width || `calc(100% - 8rem)`};
  background-color: #cccccc;
  border-radius: 1.25rem;
  margin-right: 20px;
  margin-left: 20px;
  box-shadow: ${(props) => props.shadow};
  display: flex;
  align-items: center;
`;

const FillerStyles = styled.div`
  height: 90%;
  margin: 2px;
  width: ${(props) => props.completed}%;
  background-color: ${(props) => props.color || `#ffffff`};
  border-radius: inherit;
  display: flex;
  position: relative;
  align-items: center;
  justify-content: center;
  box-shadow: ${(props) => props.shadow };
`;

const LabelStyles = styled.span`
  padding: 10px;
  color: #000000;
  font-weight: bold;
  position: absolute;
  display: flex;
  right: 0;
`;

export default ProgressBar;
