import styled from "styled-components";
import ProgressBar from "../../utils/progressBar";

const BestUser = (props) => {
  return (
    <BestUserBox>
      <UserRank>{props.number}</UserRank>
      <BestTitle>
        <BadgeImg src={props.imgUrl} />
        <TitleName>내가 무릎을 꿇은건</TitleName>
      </BestTitle>
      <UserNickName>{props.userName}</UserNickName>
      <ProgressBar
        bgcolor={props.bgcolor}
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
  padding: 0.625rem;
  width: calc(100%);
  height: 5.5rem;
  display: flex;
  align-items: center;
  box-shadow: 0.5rem 0.5rem 0.625rem #ababab;
  background-color: #d9d9d9;
  flex-shrink: 0;
`;

const UserRank = styled.div`
  margin: 0.625rem 1.5625rem;
  font-size: 1.875rem;
  font-weight: 600;
`;

const BestTitle = styled.div`
  position: relative;
  display: flex;
`;

const BadgeImg = styled.img`
  position: absolute;
  width: 4.5rem;
  height: 4.5rem;
  border: 1px solid;
  background-color: #ababab;
  border-radius: 3rem;
`;

const TitleName = styled.div`
  width: 15rem;
  height: 4.5rem;
  display: flex;
  margin-left: 1rem;
  padding-left: 40px;
  align-items: center;
  justify-content: center;
  font-size: 1rem;
  font-weight: 500;
  white-space: nowrap;
  border-radius: 2rem;
  border: 1px solid;
  flex-shrink: 0;
`;

const UserNickName = styled.div`
  width: 12rem;
  display: flex;
  margin-left: 2rem;
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
