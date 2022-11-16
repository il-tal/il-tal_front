import styled from "styled-components";

/**
 *  @param { Colors } bgcolor 색깔
 *  @param { Integer } completed 목표치
 *
 */
const ProgressBar = (props) => {
  const { bgcolor, completed, goal } = props;
  const Container = styled.div`
    height: 25px;
    width: 500px;
    background-color: #ababab;
    border-radius: 30px;
    margin-right: 30px;
    margin-left: 30px;
  `;

  const FillerStyles = styled.div`
    height: 100%;
    width: ${(completed / goal) * 100}%;
    background-color: ${bgcolor};
    border-radius: inherit;
    display: flex;
    position: relative;
    align-items: center;
  `;

  const LabelStyles = styled.span`
    padding: 25px;
    color: white;
    font-weight: bold;
    position: absolute;
    right: 0;
  `;

  return (
    <Container>
      <FillerStyles>
        <LabelStyles>{`${completed}/${goal}`}</LabelStyles>
      </FillerStyles>
    </Container>
  );
};

export default ProgressBar;
