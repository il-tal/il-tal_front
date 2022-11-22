import styled from "styled-components";

/**
 *  @param { Colors } bgcolor 색깔
 *  @param { Integer } completed 목표치
 *
 */
const ProgressBar = (props) => {
  const { bgcolor, completed, goal } = props;

  return (
    <Container>
      <FillerStyles bgcolor={bgcolor} completed={(completed / goal) * 100}>
        <LabelStyles>{`${completed}/${goal}`}</LabelStyles>
      </FillerStyles>
    </Container>
  );
};

const Container = styled.div`
  height: 1.25rem;
  width: calc(100% - 6rem);
  background-color: #ababab;
  border-radius: 1.25rem;
  margin-right: 10px;
  margin-left: 10px;
`;

const FillerStyles = styled.div`
  height: 100%;
  width: ${(props) => props.completed}%;
  background-color: ${(props) => props.bgcolor};
  border-radius: inherit;
  display: flex;
  position: relative;
  align-items: center;
`;

const LabelStyles = styled.span`
  padding: 10px;
  color: white;
  font-weight: bold;
  position: absolute;
  right: 0;
`;

export default ProgressBar;
