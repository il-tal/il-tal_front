import styled from "styled-components";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import { useState } from "react";

const ThemePoster = () => {
  const [isLike, setIsLike] = useState(false);
  return (
    <Container>
      <ThemePic>
        <img src="http://www.murderparker.com/upload_file/room/1(13).jpg" />
      </ThemePic>
      <ThemeTextWrap>
        <ThemeTextHeader>
          <span>업체명</span>
          <span>장르</span>
        </ThemeTextHeader>
        <ThemeTextTitle>테마명</ThemeTextTitle>
        <ThemeTextScore>⭐ 4.0 (20) </ThemeTextScore>
        <ThemeTextLike>
          <div>
            {isLike ? (
              <AiOutlineHeart onClick={() => setIsLike(!isLike)} />
            ) : (
              <AiFillHeart onClick={() => setIsLike(!isLike)} color={"red"} />
            )}
          </div>
        </ThemeTextLike>
      </ThemeTextWrap>
    </Container>
  );
};

export default ThemePoster;

const Container = styled.div`
  height: 330px;
  width: 200px;
  border: 1px solid;
  display: flex;
  flex-direction: column;
  align-items: center;
  box-shadow: 5px 5px 5px 5px gray;
  margin: 30px;
`;

const ThemePic = styled.div`
  height: 200px;
  width: 200px;
  background-color: yellowgreen;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  img {
    display: flex;
    object-fit: cover;
    width: 100%;
  }
`;

const ThemeTextWrap = styled.div`
  width: 190px;
  height: 130px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const ThemeTextHeader = styled.div`
  width: 190px;
  height: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 5px;

  color: grey;
  font-size: 13px;
  span {
  }
`;
const ThemeTextTitle = styled.div`
  width: 190px;
  height: 30px;
  font-size: 23px;
  font-weight: bold;
  margin: 5px 0;
  display: flex;
`;
const ThemeTextScore = styled.div`
  width: 190px;
  height: 25px;
  font-size: 15px;

  display: flex;
`;
const ThemeTextLike = styled.div`
  width: 190px;
  height: 25px;

  font-size: 25px;
  div {
    height: 25px;
    width: 25px;
    float: right;
    cursor: pointer;
  }
`;
