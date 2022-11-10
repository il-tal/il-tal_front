import styled from "styled-components";

const MyThemes = () => {
  return (
    <TestStyle>
      <image>사진</image>
      <div>업체명</div>
      <div>
        테마 이름
        <span>❤</span>
      </div>
    </TestStyle>
  );
};
export default MyThemes;

const TestStyle = styled.div`
  background-color: #d5e5f4;
  height: 200px;
  width: 300px;
`;
