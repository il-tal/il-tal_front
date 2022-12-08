import { useState } from "react";
import styled from "styled-components";

const ThemeSynopsis = ({ synopsis }) => {
  //더보기 토글
  const [ellipsis, setEllipsis] = useState(true);

  return (
    <Container>
      <SynopText>
        <p>시놉시스</p>
        <div className={ellipsis ? "small" : "big"}>
          {synopsis.split("\n").map((data, index) => {
            return (
              <span key={`sysnop${index}`}>
                {data}
                <br />
              </span>
            );
          })}
        </div>
        <span onClick={() => setEllipsis(!ellipsis)}>
          {ellipsis ? ">더보기" : "접기"}
        </span>
      </SynopText>
    </Container>
  );
};

export default ThemeSynopsis;

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
    max-height: 18px;
    width: 100%;
    font-size: 20px;
    margin: 15px 0;
    line-height: 19px;
    /* display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2; */
    overflow: hidden;
    transition: max-height 500ms ease-in-out;
    flex-direction: column;
  }
  .big {
    display: flex;
    height: 100%;
    max-height: 250px;
    width: 100%;
    font-size: 20px;
    margin: 15px 0;
    line-height: 19px;
    overflow: hidden;
    transition: max-height 500ms ease-in-out;
    flex-direction: column;
  }
  span {
    font-size: 20px;
    font-weight: bold;

    cursor: pointer;
  }
  p {
    font-size: 25px;
    font-weight: bold;
    margin: 10px 0;
  }
`;
