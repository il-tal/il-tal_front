import styled from "styled-components";

const Comment = () => {
  return (
    <Container>
      <Header>
        <span>닉네임</span>
        <span>플레이날짜 2022-12-23</span>
      </Header>
      <Middle>
        <span>성공/실패</span>
        <span>난이도</span>
        <span>힌트사용횟수</span>
        <span>⭐⭐⭐⭐</span>
      </Middle>
      <Body>직원이 너무 불친절해요.. 여기 다신 안갈래요.. 진짜에요..</Body>
    </Container>
  );
};

export default Comment;

const Container = styled.div`
  height: 100%;
  width: 100%;
  background-color: tomato;
  margin: 10px;
`;

const Header = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: space-between;
`;
const Middle = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
`;
const Body = styled.div`
  height: 100%;
  width: 100%;
`;
