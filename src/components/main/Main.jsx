import { QueryClient, useQuery } from "@tanstack/react-query";
import { SwiperSlide } from "swiper/react";
import { getAchieve, getBest, getHOf, getRandom } from "../../api/mainApi";
import { Carousel } from "../../utils/carousel";
import styled from "styled-components";
import BestUser from "./BestUser";
import PopSkel from "./PopSkel";
import PopularTheme from "./PopularTheme";
import RecommandTheme from "./RecommandTheme";
import UserSummary from "./UserSummary";
import * as custom from "../../styles/themeStyle";
import main from "../../asset/main.png";
import { useRecoilValue } from "recoil";
import { loginCheck } from "../../api/store";

const Main = () => {
  //로그인 유무 판별
  const loginCheckState = useRecoilValue(loginCheck);
  const achieve = useQuery(["getAchieve", loginCheckState], getAchieve, {
    enabled: sessionStorage.userinfo ? true : false,
  });

  const best = useQuery(["getBest"], getBest, { staleTime: Infinity });
  const random = useQuery(["getRandom"], getRandom, {
    staleTime: Infinity,
  });
  const totalAchievement = 20;
  const hallOfFame = useQuery(["getHof"], getHOf);
  return (
    <Container>
      {sessionStorage.userinfo ? (
        achieve.isLoading ? (
          <UserBox bgimg={`${main}`}>
            <UserWarp flex={`column`} justify={`center`} mtop={`2rem`}>
              <UserIntro bold={"bold"}>
                Guest 님
                <br />
              </UserIntro>
              <UserIntro bold={"normal !important"} font={`40px`}>
                탈출할준비되셨나요
              </UserIntro>
            </UserWarp>
            <UserInfo margin={`100px auto`}>
              <UserSummary
                mainBadgeImg=""
                completed={0}
                goal={totalAchievement}
              />
            </UserInfo>
          </UserBox>
        ) : (
          <UserBox bgimg={`${main}`}>
            <UserWarp flex={`column`} justify={`center`} mtop={`2rem`}>
              <UserIntro bold={"bold"}>
                {achieve.data.nickname}님
                <br />
              </UserIntro>
              <UserIntro bold={"normal !important"} font={`40px`}>
                탈출할준비되셨나요
              </UserIntro>
            </UserWarp>
            <UserInfo margin={`100px auto`}>
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
        <UserBox bgimg={`${main}`}>
          <UserWarp justify={`left`} mtop={`5rem`}>
            <UserIntro bold={"bold"} font={`40px`} color={`#ffffff`}>
              일상의 방탈출
              <br />
            </UserIntro>
            <UserIntro bold={"normal"} font={`40px`} color={`#ffffff`}>
              , 도전해보세요!
            </UserIntro>
          </UserWarp>
          <UserInfo margin={`100px auto`}>
            <UserSummary blur={1} />
            <custom.CTBox
              margin={`0 auto`}
              weight={`500`}
              display={`flex`}
              size={`24px`}
              justify={`center`}
              place={`center`}
              position={`absolute`}
              lineHeight={`43.57px`}
            >
              로그인 후 업적을 확인하세요!
            </custom.CTBox>
          </UserInfo>
        </UserBox>
      )}
      <HeaderTitle>인기 테마</HeaderTitle>
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

      <HeaderTitle>이런 테마는 어떠세요?</HeaderTitle>
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
                  key={"Recommand" + index}
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
      {hallOfFame.isLoading ? (
        <BestUserWrap>
          <BestUser></BestUser>
        </BestUserWrap>
      ) : (
        <BestUserWrap>
          {hallOfFame.data.map((data, index) => (
            <BestUser
              number={index + 1}
              imgUrl={data.mainBadgeImg}
              userName={data.nickname}
              completed={data.achieveBadgeCnt}
              badge={data.mainBadgeName}
              goal={totalAchievement}
              escape={data.totalAchieveCnt}
              bgcolor={"#123123"}
            />
          ))}
        </BestUserWrap>
      )}
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
  background-image: url(${(props) => props.bgimg});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  width: calc(100vw - 20px);
  max-width: calc(100vw - 20px);
  min-height: 383px;
  max-height: 383px;
  margin-bottom: 160px;
  font-size: 2rem;
  text-align: center;
  justify-content: center;
`;

const UserWarp = styled.div`
  display: flex;
  max-height: 212px;
  flex-direction: ${(props) => props.flex};
  justify-content: ${(props) => props.justify};
  text-align: left;
  margin-left: 15rem;
  margin-top: ${(props) => props.mtop};
`;

const UserIntro = styled.div`
  margin-top: 24px;
  font-size: ${(props) => props.font || `3rem`};
  font-weight: ${(props) => props.bold};
  color: ${(props) => props.color || `#0e0e0e`};
`;

const HeaderTitle = styled.div`
  display: block;
  width: 90rem;
  justify-content: center;
  align-items: left !important;
  font-size: 32px;
  font-weight: 700;
  margin: 24px;
`;

const UserInfo = styled.div`
  font-size: 1rem;
  width: 90rem;
  margin: ${(props) => props.margin};
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #ffffff;
  border-radius: 8px;
  box-shadow: 1px 1px 20px rgba(0, 0, 0, 0.15);
  position: relative;
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
