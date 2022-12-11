import * as Styled from "../mainStyle";
import main from "../../../asset/main.png";
import UserSummary from "./UserSummary";

const MainScreen = (props) => {
  const totalAchievement = 10;
  return (
    <>
      {props.isLoading ? (
        <Styled.UserBox bgimg={`${main}`}>
          <Styled.UserWarp flex={`column`} justify={`center`} mtop={`2rem`}>
            <Styled.TitleTextWrap>
              <Styled.UserIntro bold={"bold"}>
                Guest 님
                <br />
              </Styled.UserIntro>
              <Styled.UserIntro bold={"normal !important"} font={`40px`}>
                탈출할준비되셨나요
              </Styled.UserIntro>
            </Styled.TitleTextWrap>
          </Styled.UserWarp>
          <Styled.UserInfo margin={`100px auto`}>
            <UserSummary
              mainBadgeImg=""
              completed={0}
              goal={totalAchievement}
            />
          </Styled.UserInfo>
        </Styled.UserBox>
      ) : (
        <Styled.UserBox bgimg={`${main}`}>
          <Styled.UserWarp flex={`column`} justify={`center`} mtop={`2rem`}>
            <Styled.TitleTextWrap>
              <Styled.UserIntro bold={"bold"}>
                {props.nickname}님
                <br />
              </Styled.UserIntro>
              <Styled.UserIntro bold={"normal !important"} font={`40px`}>
                탈출할준비되셨나요
              </Styled.UserIntro>
            </Styled.TitleTextWrap>
          </Styled.UserWarp>
          <Styled.UserInfo margin={`100px auto`}>
            <UserSummary
              mainBadgeName={props.mainBadgeName}
              RecentTitle={props.badgeImgUrl[0]}
              RecentTitle_2={props.badgeImgUrl[1]}
              RecentTitle_3={props.badgeImgUrl[2]}
              mainBadgeImg={props.mainBadgeImg}
              bgcolor={"#123123"}
              completed={props.achieveBadgeCnt}
              goal={totalAchievement}
            />
          </Styled.UserInfo>
        </Styled.UserBox>
      )}
    </>
  );
};

export default MainScreen;
