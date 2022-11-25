import { useQuery } from "@tanstack/react-query";
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
  return (
    <Container>
      {sessionStorage.userinfo ? (
        achieve.isLoading ? (
          <UserBox>
            <UserWarp flex={`column`} justify={`center`} mtop={`2rem`}>
              <UserIntro bold={"bold"}>
                Guest 님
                <br />
              </UserIntro>
              <UserIntro bold={"normal !important"}>
                탈출할준비되셨나요
              </UserIntro>
            </UserWarp>
            <UserInfo margin={`2rem auto`}>
              <UserSummary
                mainBadgeImg=""
                completed={0}
                goal={totalAchievement}
              />
            </UserInfo>
          </UserBox>
        ) : (
          <UserBox>
            <UserWarp flex={`column`} justify={`center`} mtop={`2rem`}>
              <UserIntro bold={"bold"}>
                {achieve.data.nickname}님
                <br />
              </UserIntro>
              <UserIntro bold={"normal !important"}>
                탈출할준비되셨나요
              </UserIntro>
            </UserWarp>
            <UserInfo margin={`2rem auto`}>
              <UserSummary
                mainBadgeName={achieve.data.mainBadgeName}
                RecentTitle={achieve.data.badgeImgUrl[1]}
                RecentTitle_2={achieve.data.badgeImgUrl[2]}
                RecentTitle_3={achieve.data.badgeImgUrl[3]}
                mainBadgeImg={achieve.data.mainBadgeImg}
                bgcolor={"#123123"}
                completed={
                  achieve.data.totalAchieveCnt + achieve.data.totalFailCnt
                }
                goal={totalAchievement}
              />
            </UserInfo>
          </UserBox>
        )
      ) : (
        <UserBox>
          <UserWarp justify={`left`} mtop={`3rem`}>
            <UserIntro bold={"bold"}>
              일상의 방탈출,
              <br />
            </UserIntro>
            <UserIntro bold={"normal"}>도전해보세요!</UserIntro>
          </UserWarp>
          <UserInfo margin={`5rem auto`}>
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
            id={best.data[0].id}
            companyName={best.data[0].companyName}
            themeName={best.data[0].themeName}
            themeImgUrl={best.data[0].themeImgUrl}
          />
          <PopularTheme
            rank={2}
            id={best.data[1].id}
            companyName={best.data[1].companyName}
            themeName={best.data[1].themeName}
            themeImgUrl={best.data[1].themeImgUrl}
          />
          <PopularTheme
            rank={3}
            id={best.data[2].id}
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
                  id={data.id}
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
          completed={20}
          userName={"동탄방탈출마스터"}
          goal={totalAchievement}
          escape={127}
          bgcolor={"#3baf4f"}
          imgUrl="https://cdn3.emoji.gg/emojis/1054-pochacco.png"
        />
        <BestUser
          number={2}
          userName={"FreedomFreed"}
          completed={19}
          goal={totalAchievement}
          escape={121}
          bgcolor={"#57ecb1"}
          imgUrl="https://cdn3.emoji.gg/emojis/7556-keroppi.png"
        />
        <BestUser
          number={3}
          userName={"공원청소부장"}
          completed={17}
          goal={totalAchievement}
          escape={114}
          bgcolor={"#fe3b72"}
          imgUrl="https://cdn3.emoji.gg/emojis/2858-kuromimug.png"
        />
        <BestUser
          number={4}
          userName={"닉네임글자수제한은몇"}
          completed={15}
          goal={totalAchievement}
          escape={99}
          bgcolor={"#675e81"}
          imgUrl="https://cdn3.emoji.gg/emojis/8350-mymelodythumbsup.png"
        />
        <BestUser
          number={5}
          userName={"벙볕"}
          completed={14}
          goal={totalAchievement}
          escape={88}
          bgcolor={"#aeb654"}
          imgUrl="https://cdn3.emoji.gg/emojis/4097-cinnaface.png"
        />
      </BestUserWrap>
    </Container>
  );
};

export default Main;

const Container = styled.div`
  width: 90rem;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const UserBox = styled.div`
  width: calc(100vw - 20px);
  height: 300px;
  margin-bottom: 10rem;
  font-size: 2rem;
  text-align: center;
  justify-content: center;
  background-color: #ffb743;
`;

const UserWarp = styled.div`
  display: flex;
  flex-direction: ${(props) => props.flex};
  justify-content: ${(props) => props.justify};
  text-align: left;
  margin-left: 15rem;
  margin-top: ${(props) => props.mtop};
`;

const UserIntro = styled.div`
  font-size: 3rem;
  font-weight: ${(props) => props.bold};
`;

const HeaderTitle = styled.div`
  font-size: 2rem;
  margin: 10px;
`;

const UserInfo = styled.div`
  font-size: 1rem;
  width: 90rem;
  margin: ${(props) => props.margin};
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #d5e5f4;
`;

const PopularThemeWrap = styled.div`
  width: 90rem;
  margin-bottom: 50px;
  display: flex;
  justify-content: center;
  text-align: center;
`;

const RecommandThemeWrap = styled.div`
  width: 90rem;
  margin-top: 25px;
  margin-bottom: 70px;
  display: flex;
  justify-content: left;
  text-align: center;
`;

const BestUserWrap = styled.div`
  width: 90rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
`;
