import styled from "styled-components";

const MyReviews = () => {
  return (
    <TestStyle>
      <div>해리포터와 마법사의 돌</div>
      <br />
      <div>★ 4.0</div>
      <div>해리가 왜 거기서 나와요?</div>
    </TestStyle>
  );
};
export default MyReviews;

const TestStyle = styled.div`
  width: 210px;
  height: 100px;
  background-color: #d5e5f4;
  margin: 10px;
`;
