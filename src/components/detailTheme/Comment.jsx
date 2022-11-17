import styled from "styled-components";

const Comment = () => {
  return (
    <Container>
      <Header>
        <div className="nick">닉네임</div>
        <div className="date">플레이날짜 2022-12-23</div>
      </Header>
      <Middle>
        <div className="clear">성공/실패</div>
        <div className="difficulty">난이도</div>
        <div className="hint">힌트사용횟수</div>
        <div className="score">⭐⭐⭐⭐</div>
      </Middle>
      <Body>
        <span>직원이 너무 불친절해요.. 여기 다신 안갈래요.. 진짜에요..</span>
      </Body>
    </Container>
  );
};

export default Comment;

const Container = styled.div`
  height: 130px;
  width: 100%;
  border: 1px solid grey;
  margin: 15px 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Header = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;

  .nick {
    font-size: 18px;
    font-weight: bold;

    margin: 10px;
  }
  .date {
    font-size: 13px;
    margin-right: 10px;
  }
`;
const Middle = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  div {
    margin-left: 10px;
    font-size: 13px;
  }
`;
const Body = styled.div`
  height: 100%;
  width: 100%;

  font-size: 15px;
  span {
    margin: 10px;
  }
`;
