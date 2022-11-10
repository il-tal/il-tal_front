import styled from "styled-components";
import PopularTheme from "./PopularTheme";
import RecommandTheme from "./RecommandTheme";

const Main = () => {
  return (
    <Container>
      <UserInfo>
        <h3>000님 탈출할준비되셨나요</h3>
      </UserInfo>
      <p>인기테마</p>
      <PopularThemeWrap>
        <PopularTheme />
        <PopularTheme />
        <PopularTheme />

        {/* <h3>여기에 popularTheme반복문돌리기</h3> */}
      </PopularThemeWrap>
      <p>추천테마</p>
      <RecommandThemeWrap>
        <RecommandTheme />
        <RecommandTheme />
        <RecommandTheme />
        <RecommandTheme />
        <RecommandTheme />
        <RecommandTheme />
        {/* <h3>여기에 RecommandTheme반복문 돌리기</h3> */}
      </RecommandThemeWrap>
      <p>베스트 탈출러</p>
      <BestUserWrap>
        <h3>여기에 BestUser컴포넌트 반복문 돌리기</h3>
      </BestUserWrap>
    </Container>
  );
};

export default Main;

const Container = styled.div`
  height: 100%;
  width: 100%;
`;

const UserInfo = styled.div`
  height: 100%;
  width: 100%;
`;
const PopularThemeWrap = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
`;
const RecommandThemeWrap = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
`;
const BestUserWrap = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
`;
