import { useQueries, useQuery } from "@tanstack/react-query";
import styled from "styled-components";
import { SwiperSlide } from "swiper/react";
import { getAchieve, getBest, getRandom } from "../../api/mainApi";
import { Carousel } from "../../utils/carousel";
import { Button } from "../shared/Button";
import BestUser from "./BestUser";
import PopSkel from "./PopSkel";
import PopularTheme from "./PopularTheme";
import RecommandTheme from "./RecommandTheme";
import UserSummary from "./UserSummary";

const Main = () => {
  const achieve = useQuery(["getAchieve"], getAchieve);
  const best = useQuery(["getBest"], getBest, { staleTime: Infinity });
  const random = useQuery(["getRandom"], getRandom, {
    staleTime: Infinity,
  });
  const totalAchievement = 20;
  const completed = [20, 18, 16, 12, 10];
  return (
    <Container>
      {sessionStorage.access_token ? (
        achieve.isLoading ? (
          <UserBox>
            <UserIntro bold={"bold"}>Guest님</UserIntro>
            <br /> <div>탈출할준비되셨나요</div>
            <UserInfo>
              <UserSummary
                mainBadgeImg=""
                bgcolor={"#123123"}
                completed={0}
                goal={totalAchievement}
              />
            </UserInfo>
          </UserBox>
        ) : (
          <UserBox>
            <UserIntro bold={"bold"}>{achieve.data.nickname}님</UserIntro>
            <br /> <div>탈출할준비되셨나요</div>
            <UserInfo>
              <UserSummary
                mainBadgeName={achieve.data.mainBadgeName}
                RecentTitle={achieve.data.badgeImgUrl[1]}
                RecentTitle_2={achieve.data.badgeImgUrl[2]}
                RecentTitle_3={achieve.data.badgeImgUrl[3]}
                mainBadgeImg={achieve.data.mainBadgeImg}
                bgcolor={"#123123"}
                completed={12}
                goal={totalAchievement}
              />
            </UserInfo>
          </UserBox>
        )
      ) : (
        <UserBox>
          <UserIntro bold={"bold"}>일상의 방탈출</UserIntro>
          <br /> <div>지금 시작해보세요</div>
          <UserInfo>
            <UserSummary blur={1} />
            <Button
              label={"로그인"}
              position={"absolute"}
              width={`240px`}
              height={`50px`}
              left={`30%`}
            />
            <Button
              onClick={() => {
                console.log("hello");
              }}
              label={"회원가입"}
              position={"absolute"}
              width={`240px`}
              height={`50px`}
              right={`30%`}
            />
          </UserInfo>
        </UserBox>
      )}
      <HeaderTitle>인기테마</HeaderTitle>
      {best.isLoading ? (
        <PopularThemeWrap>
          <PopSkel width={22.5} height={15} />
          <PopSkel width={22.5} height={15} />
          <PopSkel width={22.5} height={15} />
        </PopularThemeWrap>
      ) : (
        <PopularThemeWrap>
          <PopularTheme
            rank={1}
            companyName={best.data[0].companyName}
            themeName={best.data[0].themeName}
            themeImgUrl={best.data[0].themeImgUrl}
          />
          <PopularTheme
            rank={2}
            companyName={best.data[1].companyName}
            themeName={best.data[1].themeName}
            themeImgUrl={best.data[1].themeImgUrl}
          />
          <PopularTheme
            rank={3}
            companyName={best.data[2].companyName}
            themeName={best.data[2].themeName}
            themeImgUrl={best.data[2].themeImgUrl}
          />
        </PopularThemeWrap>
      )}

      <HeaderTitle>추천테마</HeaderTitle>
      <RecommandThemeWrap>
        {random.isLoading ? (
          <>
            <SwiperSlide>
              <RecommandTheme
                companyName={""}
                themeName={""}
                themeImgUrl={""}
              />
            </SwiperSlide>
          </>
        ) : (
          <Carousel>
            {random.data.map((data, index) => (
              <SwiperSlide>
                <RecommandTheme
                  key={index}
                  companyName={data.companyName}
                  themeName={data.themeName}
                  themeImgUrl={data.themeImgUrl}
                />
              </SwiperSlide>
            ))}
          </Carousel>
        )}
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
  width: calc(100vw - 20px);
  height: 300px;
  margin-bottom: 8rem;
  font-size: 2rem;
  text-align: center;
  justify-content: center;
  background-color: #ffb743;
`;

const UserIntro = styled.div`
  font-weight: ${(props) => props.bold};
`;

const HeaderTitle = styled.div`
  font-size: 1.5rem;
`;

const UserInfo = styled.div`
  font-size: 1rem;
  width: 70rem;
  margin: 5rem auto;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #d5e5f4;
`;

const PopularThemeWrap = styled.div`
  width: 70rem;
  display: flex;
  justify-content: center;
  text-align: center;
`;

const RecommandThemeWrap = styled.div`
  width: 70rem;
  margin-top: 25px;
  margin-bottom: 50px;
  overflow: hidden;
  display: flex;
  justify-content: left;
  text-align: center;
`;

const BestUserWrap = styled.div`
  width: 72.5rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
`;
