import { useState } from "react";
import styled from "styled-components";

const ThemeSynopsys = () => {
  const [ellipsis, setEllipsis] = useState(true);
  return (
    <Container>
      {/* <DivisionLine /> */}
      <SynopText>
        <div className={ellipsis ? "small" : "big"}>
          어? 또 피터 대리님이네... <br />
          집가고 싶은 표정이네요? <br />
          그나저나 그 팀 부장님은 왜 자꾸 대리님만 외근 보내는 거래요? <br />
          서러워서 살겠나... 그래도 대리님 지난번에 승진 시험 잘 쳤다면서요?
          <br /> 곧 볕들날이 있겠죠~
        </div>
        <span onClick={() => setEllipsis(!ellipsis)}>
          {ellipsis ? ">더보기" : "접기"}
        </span>
      </SynopText>
    </Container>
  );
};

export default ThemeSynopsys;

const Container = styled.div`
  width: 100%;
  border-top: 1px solid gray;
  border-bottom: 1px solid gray;
  margin: 20px 0;
  display: flex;
  flex-direction: column;
`;

const SynopText = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 15px;
  /* transition: height 400ms ease-in-out; */
  .small {
    display: flex;
    height: 100%;
    max-height: 35px;
    width: 100%;
    font-size: 13px;
    margin: 15px 0;
    line-height: 19px;
    /* display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2; */
    overflow: hidden;
    transition: max-height 500ms ease-in-out;
  }
  .big {
    display: flex;
    height: 100%;
    max-height: 200px;
    width: 100%;
    font-size: 13px;
    margin: 15px 0;
    line-height: 19px;
    overflow: hidden;
    transition: max-height 500ms ease-in-out;
  }
  span {
    font-size: 14px;
    font-weight: bold;

    cursor: pointer;
  }
`;
