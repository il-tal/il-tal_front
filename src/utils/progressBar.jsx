import styled from "styled-components";

/**
 *  @param { Colors } bgcolor 색깔
 *  @param { Integer } completed 달성치
 *  @param { Integer } goal 목표치
 *  @param { Integer } height 높이 `1.2rem`
 */
const ProgressBar = (props) => {
  const { bgcolor, completed, goal, height } = props;
  return (
    <Container height={height}>
      <FillerStyles color={bgcolor} completed={(completed / goal) * 100}>
        <LabelStyles>{`${completed}/${goal}`}</LabelStyles>
      </FillerStyles>
    </Container>
  );
};

const Container = styled.div`
  height: ${(props) => props.height};
  width: calc(100% - 8rem);
  background-color: #ababab;
  border-radius: 1.25rem;
  margin-right: 10px;
  margin-left: 10px;
  box-shadow: 0.2rem 0.2rem 0.3rem #777777;
`;

const FillerStyles = styled.div`
  height: 100%;
  width: ${(props) => props.completed}%;
  background-color: ${(props) => props.color};
  border-radius: inherit;
  display: flex;
  position: relative;
  align-items: center;
  box-shadow: 0.5rem 0.5rem 0.625rem #999999;
`;

const LabelStyles = styled.span`
  padding: 10px;
  color: white;
  font-weight: bold;
  position: absolute;
  right: 0;
`;

export default ProgressBar;
