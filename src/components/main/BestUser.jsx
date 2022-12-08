import styled from "styled-components";
import ProgressBar from "../../utils/progressBar";
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
      />
      <AchievementStat>{props.escape} 회</AchievementStat>
    </BestUserBox>
  );
};
export default BestUser;

const BestUserBox = styled.div`
  margin: 10px 0px 10px 0px;
  padding: 8px;
  width: calc(100%);
  height: 5.5rem;
  display: flex;
  align-items: center;
  border: 1px solid #cccccc;
  border-radius: 8px;
  flex-shrink: 0;
`;

const UserRank = styled.div`
  margin: 0.625rem 1.5625rem;
  font-size: 24px;
  font-weight: 600;
`;

const BestTitle = styled.div`
  position: relative;
  display: flex;
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
  width: 260px;
  height: 55px;
  display: flex;
  margin-left: 8px;
  padding-left: 40px;
  align-items: center;
  justify-content: center;
  font-size: 20px;
  font-weight: 500;
  white-space: nowrap;
  border-radius: 2rem;
  border: 1px solid #d9d9d9;
  flex-shrink: 0;
`;

const UserNickName = styled.div`
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
  font-size: 1.125rem;
  margin: 0 3rem;
  width: 2.5rem;
  font-weight: 500;
  color: #000000;
  white-space: nowrap;
  display: flex;
  justify-content: center;
  text-align: center;
`;
