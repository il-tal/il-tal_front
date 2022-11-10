import styled from "styled-components";

const MyTitles = () => {
  return (
    <TestStyle>
      <TitleStyle>
        탈출에 1회 실패 <br />
        7/10
      </TitleStyle>
      칭호1
    </TestStyle>
  );
};
export default MyTitles;

const TestStyle = styled.div`
  background-color: #d5e5f4;
  text-align: center;
`;

const TitleStyle = styled.div`
  width: 100px;
  height: 100px;
  border: 1px solid black;
  border-radius: 100px;
  margin: 10px 20px;
  padding: 10px;
`;
