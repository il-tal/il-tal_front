import styled from "styled-components";
import ProgressBar from "../../../utils/progressBar";
// import asset/img/crown.png from ;
import crown from "../../../asset/img/crown.png";
/**
 * @param {number} number - 순위
 * @param {string} imgUrl - 뱃지 이미지
 * @param {string} badge - 뱃지 이름
 * @param {string} userName - 유저 닉네임
 * @param {string} bgcolor - 프로그래스바 색상
 * @param {number} completed - 프로그래스바 완료된 수치
 * @param {number} goal - 프로그래스바 목표 수치
 * @param {number} escape - 탈출 횟수
 */
const BestUser = (props) => {
  return (
    <>
      {props.number === 1 ? (
        <BestUserBox height={"128px"}>
          <img className="crown" src={crown} alt="1st price" />
          <div className="best-title">대표 칭호</div>
          <div className="usernick">닉네임</div>
          <div className="progressbar">칭호 달성률</div>
          <div className="achievementstat">탈출 성공 횟수</div>
          <UserRank>{props.number}</UserRank>
          <BestTitle>
            <BadgeImg src={props.imgUrl} />
            <TitleName>{props.badge}</TitleName>
          </BestTitle>
          <UserNickName>{props.userName}</UserNickName>
          <ProgressBar
            completed={props.completed}
            goal={props.goal}
            height={`32px`}
            width={`95%`}
          />
          <AchievementStat>{props.escape} 회</AchievementStat>
        </BestUserBox>
      ) : (
        <BestUserBox>
          <UserRank>{props.number}</UserRank>
          <BestTitle>
            <BadgeImg src={props.imgUrl} />
            <TitleName>{props.badge}</TitleName>
          </BestTitle>
          <UserNickName>{props.userName}</UserNickName>
          <ProgressBar
            completed={props.completed}
            goal={props.goal}
            height={`32px`}
            width={`95%`}
          />
          <AchievementStat>{props.escape} 회</AchievementStat>
        </BestUserBox>
      )}
    </>
  );
};
export default BestUser;

const BestUserBox = styled.div`
  margin: 10px 0px 10px 0px;
  width: 1440px;
  min-height: ${(props) => props.height || "88px"};
  display: grid;
  place-items: center;
  grid-template-columns: 0.1fr 1fr 0.5fr 5fr 0.5fr;
  border: 1px solid #cccccc;
  border-radius: 8px;
  font-size: 20px;
  .crown {
    margin: 0 auto;
  }
  .best-title {
    min-width: 220px;
    margin: 0 0 0 55px;
    border-right: 2.57847px solid #06c387;
  }
  .usernick {
    min-width: 220px;
    margin: 0 0 0 24px;
    border-right: 2.57847px solid #06c387;
  }
  .progressbar {
    min-width: 600px;
    margin: 0 0 0 24px;
    border-right: 2.57847px solid #06c387;
  }
  .achievementstat {
    min-width: 180px;
  }
`;

const UserRank = styled.div`
  min-width: 36px;
  margin: 0 20px;
  font-size: 24px;
  font-weight: 600;
`;

const BestTitle = styled.div`
  min-width: 250px;
  max-width: 250px;
  margin: 0 24px 0 0;
  position: relative;
  display: flex;
  align-items: center;
`;

const BadgeImg = styled.img`
  position: absolute;
  width: 55px;
  height: 55px;
  border: 1px solid #d9d9d9;
  background-color: #ababab;
  border-radius: 3rem;
`;

const TitleName = styled.div`
  min-width: 200px;
  max-width: 200px;
  height: 55px;
  padding: 0 10px;
  display: flex;
  padding-left: 55px;
  align-items: center;
  justify-content: center;
  font-size: 18px;
  font-weight: 500;
  white-space: nowrap;
  border-radius: 2rem;
  border: 1px solid #d9d9d9;
  flex-shrink: 0;
`;

const UserNickName = styled.div`
  min-width: 220px;
  width: 12rem;
  display: flex;
  margin-left: 32px;
  justify-content: left;
  align-items: center;
  font-size: 1.125rem;
  font-weight: 600;
  flex-shrink: 0;
`;

const AchievementStat = styled.div`
  min-width: 180px;
  font-size: 1.125rem;
  font-weight: 500;
  color: #000000;
  white-space: nowrap;
  display: flex;
  justify-content: center;
  text-align: center;
`;
