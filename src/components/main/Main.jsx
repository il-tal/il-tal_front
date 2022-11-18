import styled from "styled-components";
import BestUser from "./BestUser";
import PopularTheme from "./PopularTheme";
import RecommandTheme from "./RecommandTheme";
import UserSummary from "./UserSummary";

const Main = () => {
  const user = "정영훈";
  const totalAchievement = 20;
  const completed = [20, 18, 16, 12, 10];
  return (
    <Container>
      <UserBox>
        {user}님<br /> 탈출할준비되셨나요
        <UserInfo>
          <UserSummary />
        </UserInfo>
      </UserBox>

      <HeaderTitle>인기테마</HeaderTitle>
      <PopularThemeWrap>
        <PopularTheme rank={1} />
        <PopularTheme rank={2} />
        <PopularTheme rank={3} />
      </PopularThemeWrap>

      <HeaderTitle>추천테마</HeaderTitle>
      <RecommandThemeWrap>
        <RecommandTheme />
        <RecommandTheme />
        <RecommandTheme />
        <RecommandTheme />
        <RecommandTheme />
        <RecommandTheme />
        <RecommandTheme />
        <RecommandTheme />
      </RecommandThemeWrap>

      <HeaderTitle>베스트 탈출러</HeaderTitle>
      <BestUserWrap>
        <BestUser
          number={1}
          completed={completed[0]}
          userName={"동탄방탈출마스터"}
          goal={totalAchievement}
          escape={127}
          bgcolor={"#3baf4f"}
          imgUrl="https://cdn3.emoji.gg/emojis/1054-pochacco.png"
        />
        <BestUser
          number={2}
          userName={"FreedomFreed"}
          completed={completed[1]}
          goal={totalAchievement}
          escape={121}
          bgcolor={"#57ecb1"}
          imgUrl="https://cdn3.emoji.gg/emojis/7556-keroppi.png"
        />
        <BestUser
          number={3}
          userName={"공원청소부장"}
          completed={completed[2]}
          goal={totalAchievement}
          escape={114}
          bgcolor={"#fe3b72"}
          imgUrl="https://cdn3.emoji.gg/emojis/2858-kuromimug.png"
        />
        <BestUser
          number={4}
          userName={"닉네임글자수제한은몇"}
          completed={completed[3]}
          goal={totalAchievement}
          escape={99}
          bgcolor={"#675e81"}
          imgUrl="https://cdn3.emoji.gg/emojis/8350-mymelodythumbsup.png"
        />
        <BestUser
          number={5}
          userName={"벙볕"}
          completed={completed[4]}
          goal={totalAchievement}
          escape={32}
          bgcolor={"#aeb654"}
          imgUrl="https://cdn3.emoji.gg/emojis/4097-cinnaface.png"
        />
      </BestUserWrap>
    </Container>
  );
};

export default Main;

const Container = styled.div`
  width: 62.5rem;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const UserBox = styled.div`
  width: 100vw;
  margin-bottom: 6.25rem;
  font-size: 2rem;
  background-color: gray;
`;

const HeaderTitle = styled.div`
  font-size: 1.5rem;
`;

const UserInfo = styled.div`
  font-size: 1rem;
  z-index: 10;
  width: 50rem;
  margin: 6.25rem auto;
  background-color: #d5e5f4;
`;

const PopularThemeWrap = styled.div`
  width: 1000px;
  display: flex;
  justify-content: center;
  text-align: center;
`;
const RecommandThemeWrap = styled.div`
  width: 100vw;
  overflow: hidden;
  display: flex;
  justify-content: center;
  text-align: center;
`;
const BestUserWrap = styled.div`
  width: 1116px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
`;
